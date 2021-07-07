import SingleOrder from "../single-order/SingleOrder";
function OrderList({ Orders, OrderPrices, orderDate }) {
  return (
    <div>
      {Orders.map((value, index) => {
        return (
          <SingleOrder
            OrderPrices={OrderPrices}
            orderDate={orderDate}
            index={index}
            Orders={Orders}
          ></SingleOrder>
        );
      })}
    </div>
  );
}

export default OrderList;
