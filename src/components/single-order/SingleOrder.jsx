import { useState } from "react";
function SingleOrder({ OrderPrices, orderDate, Orders, index }) {
  const [isVisible, setIsVisible] = useState(false);

  const showDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div key={index} className="single-order-wrapper">
      <div>
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
      </div>
      {isVisible === true && (
        <table className="orders-table">
          <thead>
            <tr className="orders-titles">
              <th>Product Name</th>
              <th>Price</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {Orders[index].map((val, ind) => {
              const orderInfo = Orders[index][ind];
              return (
                <tr className="orders-tr-wrapper">
                  <td className="orders-td">{orderInfo.employee_name}</td>
                  <td className="orders-td">
                    {orderInfo.employee_salary}$(x{orderInfo.count})
                  </td>
                  <td className="orders-td">{orderInfo.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SingleOrder;
