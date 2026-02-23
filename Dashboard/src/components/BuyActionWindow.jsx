import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { getAuthToken, getBackendUrl } from "../utils/auth";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");

  const handleOrderClick = async () => {
    setError("");
    const token = getAuthToken();
    if (!token) {
      setError("Please login again.");
      return;
    }

    try {
      await axios.post(
        `${getBackendUrl()}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      generalContext.closeBuyWindow();
    } catch {
      setError("Could not place order.");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required Rs 140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleOrderClick}>
            {mode}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
      {error ? <p className="loss">{error}</p> : null}
    </div>
  );
};

export default BuyActionWindow;
