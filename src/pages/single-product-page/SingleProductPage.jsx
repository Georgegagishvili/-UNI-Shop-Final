import "./single_product.css";
import { useHistory } from "react-router-dom";

function SingleProductPage() {
  let history = useHistory();
  const itemInfo = JSON.parse(localStorage.getItem("currentProduct"));
  const itemIMG = JSON.parse(localStorage.getItem("currentImage"));

  return (
    <div>
      <div class="header">
        <p>Detailed Information</p>
      </div>
      <div class="product_card_wrapper">
        <div class="product_card">
          {/* <!-- Left Side Image --> */}
          <div class="product_card_left">
            <img src={itemIMG} />
          </div>
          {/* <!-- Left Side Image --> */}
          {/* <!-- Right Side --> */}
          <div class="product_card_right">
            {/* <!-- Right Side properties --> */}
            <p class="product_category_name">Product ID: {itemInfo.id}</p>
            <span class="product_product_name">{itemInfo.employee_name}</span>
            <p class="product_description">Product Description</p>
            <p class="product_description_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco labo.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="product_price">{itemInfo.employee_salary}$</p>
            {/* <!-- Right Side properties --> */}
            {/* <!-- To Cart FORM --> */}
            <div style={{ marginTop: "2rem" }}>
              <button onClick={() => history.goBack()}>
                Return to main page
              </button>
            </div>
            {/* <!-- To Cart FORM --> */}
          </div>
          {/* <!-- Right Side --> */}
        </div>
      </div>
    </div>
  );
}
export default SingleProductPage;
