import React from "react";
import "./OrderServiceList.css";

const OrderServiceList = ({ orders, fetchOrders, setEditingOrder }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/orders/${id}`, {
      method: "DELETE",
    });
    fetchOrders();
  };

  return (
    <div className="order-list-container">
      <h2>Order Records</h2>

      {orders.length === 0 ? (
        <p className="no-order">No orders available.</p>
      ) : (
        <div className="order-grid">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-info">
                <h3>{order.customerName}</h3>

                <p><strong>Product:</strong> {order.productName}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Price:</strong> ₹{order.price}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </div>

              <div className="order-buttons">
                <button className="edit-btn" onClick={() => setEditingOrder(order)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderServiceList;
