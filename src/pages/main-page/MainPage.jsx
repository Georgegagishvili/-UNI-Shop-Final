import { useEffect, useState } from "react";
import ProductCard from "../../components/products/product-card";

import "./mainpage-style.css";

function MainPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  var imgArray = [];
  for (let i = 0; i < 24; i++) {
    imgArray.push(
      `${"https://random.imagecdn.app/500/"}${
        Math.floor(Math.random() * 300) + 250
      }`
    );
  }

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error occured...</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading" id="loading">
        <img
          src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"
          alt="img"
        />
      </div>
    );
  } else {
    return (
      <div>
        <div className="card-list">
          {items.map((item) => (
            <ProductCard
              item={item}
              key={item.id}
              img={imgArray[Math.floor(Math.random() * imgArray.length)]}
            ></ProductCard>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
