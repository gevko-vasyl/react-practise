import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import { getCart } from '../../utils/api/productsApi';

const Header = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(data => setCart(data));
  }, []);

  return (
    <div className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
