import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = moment(date).format('YYYY-MM-DD hh:mm:ss');

  //!ComponentDidMount
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    console.log('ComponentDidMount');

    //!ComponentWillUnmount
    return () => {
      clearInterval(timer);
      console.log('ComponentWillUnmount');
    };
  }, []);

  //!ComponentDidUpdate

  useEffect(() => {
    console.log('ComponentDidUpdate');
    localStorage.setItem('date', JSON.stringify(date));
  });

  console.log('render');

  return (
    <div className="Timer">
      <fieldset>
        <legend>Timer</legend>
        <p>current date: {formattedDate}</p>
      </fieldset>
    </div>
  );
};

export default Timer;
