import React, { useState, useEffect } from "react";
import "./OrderServiceForm.css";

function OrderServiceForm({ fetchOrders, editingOrder, setEditingOrder }) {
  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    price: "",
    status: ""
  });

  useEffect(() => {
    if (editingOrder) {
      setOrder(editingOrder);
    }
  }, [editingOrder]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = "http://localhost:8080/orders";
      let method = "POST";

      if (editingOrder) {
        url = `http://localhost:8080/orders/${editingOrder.id}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        alert("Failed to save order!");
        return;
      }

      alert(editingOrder ? "Order Updated!" : "Order Added!");

      setOrder({
        customerName: "",
        productName: "",
        quantity: "",
        price: "",
        status: ""
      });

      setEditingOrder(null);
      fetchOrders();
    } catch (err) {
      console.error("Error while saving:", err);
      alert("Backend error. Check console.");
    }
  };

  return (
    <div className="order-form-container">
      <h2>{editingOrder ? "Update Order" : "Add New Order"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={order.customerName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={order.productName}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={order.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={order.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={order.status}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingOrder ? "Update Order" : "Add Order"}
        </button>
      </form>
    </div>
  );
}

export default OrderServiceForm;
