import OrderList from "../../components/order-list";
import { IsAuthProtected } from "../../hoc/IsAuthProtected";

import "./orders_style.css";
function OrdersPage() {
  const Orders = JSON.parse(localStorage.getItem("Orders"));
  const OrderPrices = JSON.parse(localStorage.getItem("OrderPrices"));
  const orderDate = JSON.parse(localStorage.getItem("OrderTimes"));

  if (Orders) {
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
  } else {
    return (
      <div className="cart_not_found">
        <img
          src="https://www.pngkey.com/png/full/227-2279345_oops-png-onomatopoeia-no-background.png"
          alt="img"
          style={{ width: "25vw" }}
        ></img>
        <div className="header">
          <p>No Orders Found</p>
        </div>
      </div>
    );
  }
}

export default IsAuthProtected(OrdersPage);
