import React from 'react';

// ! ShouldComponentUpdate IN HOOKS
// * return false to render component

const areEqual = (prevProps, nextProps) =>
  prevProps.counter.value === nextProps.counter.value;

const CounterItem = React.memo(
  ({ counter, onIncrement, onDecrement, onDelete }) => {
    console.log('id: ', counter.id);

    // if (counter.value > 10) {
    //   throw new Error('babahhhhh');
    // }
    return (
      <li className="counter-item">
        <button onClick={() => onDecrement(counter.id)}>-</button>
        <span>{counter.value}</span>
        <button onClick={() => onIncrement(counter.id)}>+</button>
        <button onClick={() => onDelete(counter.id)}>x</button>
      </li>
    );
  },
  areEqual,
);

export default CounterItem;
