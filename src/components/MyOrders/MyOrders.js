import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const email = user.email;
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`https://floating-shore-39651.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);
  return (
    <div>
      <h2>Total Order: {orders.length}</h2>
      <Table>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
        {orders.map((order) => (
          <tr>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
