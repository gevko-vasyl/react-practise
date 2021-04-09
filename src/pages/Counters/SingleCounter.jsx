import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todo: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
});

const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => setValue(prevState => prevState + step);
  const handleDecrement = () =>
    setValue(prevState => (value - step < 0 ? 0 : value - step));
  const handleChangeStep = e => setStep(Number(e.target.value));

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className={classes.todo}>
      <h4>Todo Item</h4>
      <label>
        <span>Step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>

      <div className={classes.buttons}>
        <button onClick={handleDecrement}>-</button>
        <p>{value}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default SingleCounter;
