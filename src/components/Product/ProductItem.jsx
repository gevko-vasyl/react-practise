import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton';
import { createUseStyles } from 'react-jss';

import { loadImage } from '../../utils/loadImage';

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

const ProductItem = ({ product, onDelete }) => {
  const classes = useStyles();
  const handleDelete = () => onDelete(product.id);

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card className={classes.card}>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <p>color: {product.color || '--'}</p>
          <p>Insurance:{product?.insurance?.toString() || '--'}</p>
          <p>Software: {product?.software?.toString() || '--'}</p>
          <img src={loadImage(product.img)} alt={product.name} />
        </Card>
      </CardActionArea>
      <div className="icons">
        <IconButton>
          <ShoppingCartTwoToneIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default ProductItem;
