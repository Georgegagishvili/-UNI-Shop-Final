import OrderList from "../../components/order-list";
import { IsAuthProtected } from "../../hoc/IsAuthProtected";

import "./orders_style.css";
function OrdersPage() {
  const Orders = JSON.parse(localStorage.getItem("Orders"));
  const OrderPrices = JSON.parse(localStorage.getItem("OrderPrices"));
  const orderDate = JSON.parse(localStorage.getItem("OrderTimes"));
  return (
    <div className="orders-wrapper">
      <div className="orders-list">
        <div className="header">
          <p>ORDER LIST</p>
        </div>
        <OrderList
          Orders={Orders}
          OrderPrices={OrderPrices}
          orderDate={orderDate}
        ></OrderList>
      </div>
    </div>
  );
}

export default IsAuthProtected(OrdersPage);
