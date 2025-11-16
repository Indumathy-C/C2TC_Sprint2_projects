/*import React, { useEffect, useState } from "react";
import OrderServiceForm from "./components/OrderServiceForm";
import OrderServiceList from "./components/OrderServiceList";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8080/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="App">
      <OrderServiceForm
        fetchOrders={fetchOrders}
        editingOrder={editingOrder}
        setEditingOrder={setEditingOrder}
      />

      <OrderServiceList
        orders={orders}
        fetchOrders={fetchOrders}
        setEditingOrder={setEditingOrder}
      />
    </div>
  );
}

export default App;
*/
import React, { useEffect, useState } from "react";
import OrderServiceForm from "./components/OrderServiceForm";
import OrderServiceList from "./components/OrderServiceList";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);

  // ⬇️ FETCH ORDERS FROM BACKEND (REPLACE YOUR OLD fetchEmployees)
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:8080/orders");
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="App">
      <OrderServiceForm
        fetchOrders={fetchOrders}
        editingOrder={editingOrder}
        setEditingOrder={setEditingOrder}
      />

      <OrderServiceList
        orders={orders}
        fetchOrders={fetchOrders}
        setEditingOrder={setEditingOrder}
      />
    </div>
  );
}

export default App;
