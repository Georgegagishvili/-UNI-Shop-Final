import { useState } from "react";
import { IsAuthProtected } from "../../hoc/IsAuthProtected";

import CartTr from "../../components/tables/cart-tr/CartTr";

import "./cart_style.css";

function CartPage() {
  // let i = 0; onAdd
  const productList = JSON.parse(localStorage.getItem("productIds"));
  const [products, setProducts] = useState(productList);
  // const [count, setCount] = useState(productList[i].count); // onAdd
  const priceList = [];
  const reducer = (accumulator, curr) => accumulator + curr;
  if (productList !== null && productList.length > 0) {
    for (let i = 0; i < productList.length; i++) {
      priceList.push(productList[i].employee_salary);
    }
  }
  const onRemove = (item) => {
    for (let i = 0; i < productList.length; i++) {
      if (item.id === productList[i].id) {
        setProducts(productList.splice(i, 1));
        localStorage.setItem("productIds", JSON.stringify(productList));
      }
    }
  };
  const onAdd = (item) => {
    console.log("work in progress");
  };
  if (productList) {
    return (
      <div>
        {productList.length > 0 && (
          <div>
            <div className="header">
              <p>CART/CHECKOUT</p>
            </div>
            <div className="orders_table_wrapper">
              <table>
                <thead>
                  <tr className="table_head">
                    <th className="column1">Product Name</th>
                    <th className="column2">Quantity</th>
                    <th className="column3">Price</th>
                    {/* <th className="column4">Total</th> */}
                  </tr>
                </thead>
                <tbody className="table_body" id="cart-table">
                  {/* <!--           Example TR structure */}
                  {productList &&
                    productList.map((item) => {
                      return (
                        <CartTr
                          key={item.id}
                          item={item}
                          onAdd={onAdd}
                          onRemove={onRemove}
                        ></CartTr>
                      );
                    })}
                  {/* Example TR structure --> */}
                  {/* <!--           Example TR structure */}
                  <tr>
                    <td className="column4" colSpan="4">
                      Total Price: $
                      {priceList.length > 0 && priceList.reduce(reducer)}
                    </td>
                  </tr>
                  {/* Example TR structure --> */}
                </tbody>
              </table>
            </div>
            <div className="place_order_footer">
              <div className="place_order_button_wrapper">
                <a href="/">Place Order</a>
              </div>
            </div>
          </div>
        )}
        {(productList.length === 0 ||
          productList === null ||
          productList.length === null) && (
          <div className="cart_not_found">
            <img
              src="https://img.pngio.com/free-rewards-on-groceries-fetch-rewards-products-png-1045_837.png"
              alt="img"
            ></img>
            <div className="header">
              <p>Your cart is empty!</p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="cart_not_found">
        <img
          src="https://img.pngio.com/free-rewards-on-groceries-fetch-rewards-products-png-1045_837.png"
          alt="img"
        ></img>
        <div className="header">
          <p>Your cart is empty!</p>
        </div>
      </div>
    );
  }
}

export default IsAuthProtected(CartPage);
// export default CartPage;
