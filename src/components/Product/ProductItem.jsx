import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { createUseStyles } from 'react-jss';

import {} from '../utils/loadImage';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    '& img': {
      height: 100,
    },
    width: 300,
    card: {
      marginBottom: 10,
      padding: 10,
    },
  },
});

const ProductItem = ({ product }) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <CardActionArea>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <img src={product.img} alt={product.name} />
        </CardActionArea>
      </Card>
      <IconButton>
        <ShoppingCartTwoToneIcon />
      </IconButton>
    </li>
  );
};

export default ProductItem;
