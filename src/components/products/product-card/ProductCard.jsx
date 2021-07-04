import styles from "./product_style.module.css";

function ProductCard() {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <img src="http://placehold.it/300x500" />
          <div className={styles.card_buttons}>
            <button style={{ marginRight: "5px" }}>ADD TO CART</button>
            <button>SEE MORE</button>
          </div>
        </div>

        <div className={styles.card_right}>
          <p className={styles.card_category_name}>CATEG NAME</p>
          <h2>Product Name</h2>
          <span>700 $</span>
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
export default ProductCard;
