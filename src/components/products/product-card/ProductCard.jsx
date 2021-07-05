import styles from "./product_style.module.css";
import propTypes from "prop-types";
import { memo } from "react/cjs/react.production.min";

function ProductCard({ item, img }) {
  const onItemClick = () => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) {
      var existingProducts = JSON.parse(localStorage.getItem("productIds"));
      if (existingProducts == null) existingProducts = [];
      if (!existingProducts.find((o) => o.id === item.id)) {
        existingProducts.push(item);
      }
      localStorage.setItem("productIds", JSON.stringify(existingProducts));
    } else {
      window.location.replace("/auth");
    }
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <img src={img} alt="img" />
          <div className={styles.card_buttons}>
            <button style={{ marginRight: "5px" }} onClick={onItemClick}>
              ADD TO CART
            </button>
            <button>SEE MORE</button>
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
