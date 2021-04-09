const CounterItem = ({ counter, onIncrement, onDecrement, onDelete }) => {
  return (
    <li className="counter-item">
      <button onClick={() => onDecrement(counter.id)}>-</button>
      <span>{counter.value}</span>
      <button onClick={() => onIncrement(counter.id)}>+</button>
      <button onClick={() => onDelete(counter.id)}>x</button>
    </li>
  );
};

export default CounterItem;
