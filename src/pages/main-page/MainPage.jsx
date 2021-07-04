import { useEffect, useState } from "react";
import ProductCard from "../../components/products/product-card";

function MainPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div
          className="card-list"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items.map((item) => (
            <ProductCard item={item} key={item.id}></ProductCard>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
