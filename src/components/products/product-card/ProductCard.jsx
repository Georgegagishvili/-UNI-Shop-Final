import propTypes from "prop-types";
import { memo } from "react/cjs/react.production.min";
import { NavLink, useHistory, Redirect } from "react-router-dom";

import styles from "./product_style.module.css";

function ProductCard({ item, img }) {
  const history = useHistory();
  const toCart = () => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) {
      var existingProducts = JSON.parse(localStorage.getItem("productIds"));
      if (existingProducts == null) existingProducts = [];
      if (!existingProducts.find((o) => o.id === item.id)) {
        item.count = 1;
        existingProducts.push(item);
      }
      localStorage.setItem("productIds", JSON.stringify(existingProducts));
    } else {
      return <Redirect to="/auth"></Redirect>;
    }
  };

  const seeMore = () => {
    localStorage.setItem("currentProduct", JSON.stringify(item));
    localStorage.setItem("currentImage", JSON.stringify(img));
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <img src={img} alt="img" />
          <div className={styles.card_buttons}>
            <button style={{ marginRight: "5px" }} onClick={toCart}>
              ADD TO CART
            </button>
            <button onClick={seeMore}>
              <NavLink to={`/product/id?=${item.id}`}>SEE MORE</NavLink>
            </button>
          </div>
        </div>

        <div className={styles.card_right}>
          <p className={styles.card_category_name}>ID: {item.id}</p>
          <h2>{item.employee_name}</h2>
          <span>{item.employee_salary}$</span>
          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: propTypes.object,
};
export default memo(ProductCard);
