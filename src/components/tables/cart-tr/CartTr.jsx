function CartTr({ item, onAdd, onRemove }) {
  return (
    <tr key={item.id}>
      <td className="column1">
        <a href="/">{item.employee_name}</a>
      </td>
      <td className="column2">
        <button onClick={() => onAdd(item)}>+</button>
        {item.count}
        <button onClick={() => onRemove(item)}>-</button>
      </td>
      <td className="column3">${item.employee_salary}</td>
      {/* <td className="column4"></td> */}
    </tr>
  );
}

export default CartTr;
