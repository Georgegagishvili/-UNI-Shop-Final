import { useState } from "react";

function OrderList({ Orders, OrderPrices, orderDate }) {
  const [isVisible, setIsVisible] = useState(false);

  const showDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {Orders.map((value, index) => {
        return (
          <div key={index} className="single-order-wrapper">
            <div className="single-order">
              <img src="https://placehold.it/100x100" alt="img" />
              <div className="order-id-date">
                <span>Order #{index + 1}:</span>
                <span>Date: {orderDate[index]}</span>
              </div>
              <div className="order-info">
                <span>Item Count: {Orders[index].length}</span>
                <span>Full Price: {OrderPrices[index]}$</span>
              </div>
              {isVisible === false && (
                <button onClick={showDetails}>Show Details</button>
              )}
              {isVisible === true && (
                <button onClick={showDetails}>Hide Details</button>
              )}
            </div>
            {isVisible === true && (
              <div>
                {Orders[index].map((val, ind) => {
                  return (
                    <div className="order-details" key={ind}>
                      {Orders[index][ind].employee_name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
