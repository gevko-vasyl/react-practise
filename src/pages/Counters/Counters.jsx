import { useState, useEffect } from 'react';
// import SingleCounter from './SingleCounter';
import CounterList from './CounterList';

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 12 },
    { id: 2, value: 87 },
  ]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));
    setCounters(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  const addCounter = () =>
    setCounters(prevState => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ]);

  const handleIncrement = id => {
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter,
      ),
    );
  };
  const handleDecrement = id => {
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter,
      ),
    );
  };
  const handleDeleteCounter = id => {
    setCounters(prevState => prevState.filter(counter => counter.id !== id));
  };
  return (
    <div className="Counters">
      <h2>Counters</h2>
      <button onClick={addCounter}>Add counter</button>
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
      {/* <SingleCounter /> */}
    </div>
  );
};

export default Counters;
