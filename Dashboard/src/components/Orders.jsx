import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getAuthToken, getBackendUrl } from "../utils/auth";

const Orders = () => {
  const authToken = getAuthToken();
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(authToken));
  const [error, setError] = useState(authToken ? "" : "Please login first.");

  useEffect(() => {
    if (!authToken) {
      return;
    }

    axios
      .get(`${getBackendUrl()}/allOrder`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setAllOrders(res.data || []);
      })
      .catch(() => {
        setError("Unable to fetch orders right now.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [authToken]);

  const totalQty = allOrders.reduce((sum, order) => {
    const qty = Number(order.qty || 0);
    const signedQty = order.mode === "SELL" ? -qty : qty;
    return sum + signedQty;
  }, 0);
  const totalValue = allOrders.reduce(
    (sum, order) => sum + Number(order.qty || 0) * Number(order.price || 0),
    0
  );

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      {isLoading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p className="loss">{error}</p>
      ) : allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table responsive-table">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const qty = Number(order.qty || 0);
                const signedQty = order.mode === "SELL" ? -qty : qty;
                const price = Number(order.price || 0);
                const value = qty * price;
                const modeClass = order.mode === "SELL" ? "loss" : "profit";

                return (
                  <tr key={order._id || index}>
                    <td className={modeClass} data-label="Type">
                      <span className="cell-value">{order.mode || "BUY"}</span>
                    </td>
                    <td data-label="Instrument">
                      <span className="cell-value">{order.name || "-"}</span>
                    </td>
                    <td className={modeClass} data-label="Qty.">
                      <span className="cell-value">{signedQty}</span>
                    </td>
                    <td data-label="Price">
                      <span className="cell-value">{price.toFixed(2)}</span>
                    </td>
                    <td data-label="Value">
                      <span className="cell-value">{value.toFixed(2)}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {!isLoading && !error && allOrders.length > 0 ? (
        <div className="row">
          <div className="col">
            <h5>{totalQty}</h5>
            <p>Total quantity</p>
          </div>
          <div className="col">
            <h5>{totalValue.toFixed(2)}</h5>
            <p>Total order value</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Orders;
