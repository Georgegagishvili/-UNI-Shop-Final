import { IsAuthProtected } from "../../hoc/IsAuthProtected";
import "./cart_style.css";

function CartPage() {
  const productList = JSON.parse(localStorage.getItem("productIds"));
  const priceList = [];
  const reducer = (accumulator, curr) => accumulator + curr;
  for (let i = 0; i < productList.length; i++) {
    priceList.push(productList[i].employee_salary);
  }
  return (
    <div>
      <div class="header">
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
                  <tr key={item.id}>
                    <td className="column1">
                      <a href="/cart">{item.employee_name}</a>
                    </td>
                    <td className="column2">
                      <button>+</button>1<button>-</button>
                    </td>
                    <td className="column3">${item.employee_salary}</td>
                    {/* <td className="column4"></td> */}
                  </tr>
                );
              })}

            {/* Example TR structure --> */}

            {/* <!--           Example TR structure */}
            <tr>
              <td className="column4" colSpan="4">
                Total Price: ${priceList.reduce(reducer)}
              </td>
            </tr>
            {/* Example TR structure --> */}
          </tbody>
        </table>
      </div>
      <div class="place_order_footer">
        <div class="place_order_button_wrapper">
          <a href="#">Place Order</a>
        </div>
      </div>
    </div>
  );
}

export default IsAuthProtected(CartPage);
