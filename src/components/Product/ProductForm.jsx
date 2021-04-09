import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import ipod from '../../assets/ipod.jpg';
import phone from '../../assets/phone.jpg';
import window from '../../assets/window.jpg';

const useStyles = createUseStyles({
  productFrom: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [count, setCount] = useState('');
  // const [image, setImage] = useState('');

  const initialState = {
    name: '',
    price: '',
    count: '',
    color: 'gray',
    insurance: false,
    software: false,
    image: 'phone',
  };

  const [state, setState] = useState(initialState);

  const { name, price, count, color, insurance, software, image } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      color,
      insurance,
      software,
      img: image,
    };

    onSubmit(newItem);
    console.log(newItem.img);

    setState(initialState);

    // setName('');
    // setPrice('');
    // setCount('');
  };
  // const handleChangeName = e => setName(e.target.value);
  // const handleChangePrice = e => setPrice(e.target.value);
  // const handleChangeCount = e => setCount(e.target.value);
  // const handleChangeImage = e => setImage(e.target.value);

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleChangeName = e =>
  //   setState(prevState => ({
  //     ...prevState,
  //     name: e.target.value,
  //   }));
  // const handleChangePrice = e =>
  //   setState(prevState => ({
  //     ...prevState,
  //     price: e.target.value,
  //   }));
  // const handleChangeCount = e =>
  //   setState(prevState => ({
  //     ...prevState,
  //     count: e.target.value,
  //   }));
  // const handleChangeImage = e =>
  //   setState(prevState => ({
  //     ...prevState,
  //     image: e.target.value,
  //   }));

  const handleCheckboxChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };
  return (
    <form className={classes.productFrom} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          className={classes.input}
          onChange={handleChange}
          name="name"
        ></input>
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input
          type="text"
          value={price}
          name="price"
          className={classes.input}
          onChange={handleChange}
        ></input>
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input
          type="text"
          value={count}
          name="count"
          className={classes.input}
          onChange={handleChange}
        ></input>
      </label>
      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name="image"
          onChange={handleChange}
        >
          <option value={[phone, 123]}>{phone}</option>

          <option value="window">window</option>
        </select>
      </label>
      <fieldset>
        <legend>Color</legend>
        <label>
          <span>white</span>
          <input
            type="radio"
            name="color"
            value="white"
            checked={color === 'white'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>black</span>
          <input
            type="radio"
            name="color"
            value="black"
            checked={color === 'black'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>gray</span>
          <input
            type="radio"
            name="color"
            value="gray"
            checked={color === 'gray'}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <label>
          <span>Advanced insurance</span>
          <input
            type="checkbox"
            checked={insurance}
            name="insurance"
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          <span>Install software</span>
          <input
            type="checkbox"
            checked={software}
            name="software"
            onChange={handleCheckboxChange}
          />
        </label>
      </fieldset>

      <button type="submit" className={classes.button}>
        Add product
      </button>
    </form>
  );
};

export default ProductForm;
