require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3535;
const URL = process.env.MONGO_URL;
const cors = require("cors");

const holdingModel = require("./Models/holdingModel");
const watchModel = require("./Models/watchModel");
const orderModel = require("./Models/orderModel");
const userModel = require("./Models/userModel");

app.use(cors());
app.use(express.json());

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(URL);
}

const getPasswordHash = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const digest = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");
  return `${salt}:${digest}`;
};

const isPasswordValid = (password, storedHash) => {
  const [salt, digest] = String(storedHash || "").split(":");
  if (!salt || !digest) {
    return false;
  }
  try {
    const incomingDigest = crypto
      .pbkdf2Sync(password, salt, 100000, 64, "sha512")
      .toString("hex");
    const storedBuffer = Buffer.from(digest, "hex");
    const incomingBuffer = Buffer.from(incomingDigest, "hex");
    if (storedBuffer.length !== incomingBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(storedBuffer, incomingBuffer);
  } catch {
    return false;
  }
};

const getBearerToken = (req) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) {
    return "";
  }
  return authHeader.split(" ")[1];
};

const authMiddleware = async (req, res, next) => {
  const token = getBearerToken(req);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await userModel.findOne({ authToken: token });
  if (!user) {
    return res.status(401).json({ message: "Invalid token" });
  }

  req.user = user;
  next();
};


app.get("/", (req, res) => {
  res.send("server is working");
});

app.post("/auth/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const normalizedEmail = String(email).toLowerCase().trim();
  const existingUser = await userModel.findOne({ email: normalizedEmail });
  if (existingUser) {
    return res.status(409).json({ message: "Email is already registered" });
  }

  const token = crypto.randomBytes(24).toString("hex");
  const newUser = await userModel.create({
    fullName: String(fullName).trim(),
    email: normalizedEmail,
    passwordHash: getPasswordHash(String(password)),
    authToken: token,
  });

  return res.status(201).json({
    message: "Signup successful",
    token,
    user: {
      id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
    },
  });
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const normalizedEmail = String(email).toLowerCase().trim();
  const user = await userModel.findOne({ email: normalizedEmail });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (!isPasswordValid(String(password), user.passwordHash)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = crypto.randomBytes(24).toString("hex");
  user.authToken = token;
  await user.save();

  return res.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
});

app.get("/auth/me", authMiddleware, async (req, res) => {
  return res.json({
    user: {
      id: req.user._id,
      fullName: req.user.fullName,
      email: req.user.email,
    },
  });
});

app.post("/auth/logout", authMiddleware, async (req, res) => {
  req.user.authToken = null;
  await req.user.save();
  return res.json({ message: "Logged out successfully" });
});

app.get("/allHoldings", async (req, res) => {
  const allholding = await holdingModel.find({});
  res.json(allholding);
});

app.get("/watchlist", async (req, res) => {
  const allWatchlist = await watchModel.find({});
  res.json(allWatchlist);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const name = String(req.body.name || "").trim();
  const mode = String(req.body.mode || "BUY").toUpperCase();

  if (!name || qty <= 0 || price <= 0 || !["BUY", "SELL"].includes(mode)) {
    return res.status(400).json({ message: "Invalid order payload" });
  }

  const newOrder = await orderModel.create({
    name,
    qty,
    price,
    mode,
    userId: req.user._id,
  });

  return res.status(201).json({
    message: "Order saved",
    order: newOrder,
  });
});

app.get("/allOrder", authMiddleware, async (req, res) => {
  const allOrder = await orderModel
    .find({ userId: req.user._id })
    .sort({ createdAt: -1 });
  res.json(allOrder);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
