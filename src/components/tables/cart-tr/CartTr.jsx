import { useState } from "react";
function CartTr({ item, onRemove, productList }) {
  const [count, setCount] = useState(item.count);
  const onAdd = (value) => {
    setCount(count + value);
    item.count = count;
    for (let i = 0; i < productList.length; i++) {
      if (item.id === productList[i].id && item.count > 0) {
        item.count = count + value;
        productList[i] = item;
        localStorage.setItem("productIds", JSON.stringify(productList));
      }
      if (item.count < 1) {
        onRemove(item);
        return;
      }
    }
  };

  return (
    <tr key={item.id}>
      <td className="column1">
        <a href="/">{item.employee_name}</a>
      </td>
      <td className="column2">
        <button onClick={() => onAdd(1)}>+</button>
        {count}
        <button onClick={() => onAdd(-1)}>-</button>
      </td>
      <td className="column3">${item.employee_salary * item.count}</td>
      {/* <td className="column4"></td> */}
    </tr>
  );
}

export default CartTr;
