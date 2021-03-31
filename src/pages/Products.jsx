import ProductList from '../components/Product/ProductList';
import ipod from '../assets/ipod.jpg';
import notebook from '../assets/notebook.jpeg';
import phone from '../assets/phone.jpg';
import window from '../assets/window.jpg';

const products = [
  {
    id: 1,
    name: 'phone',
    price: 1000,
    count: 2,
    img: phone,
  },
  {
    id: 2,
    name: 'notebook',
    price: 3000,
    count: 0,
    img: notebook,
  },
  {
    id: 3,
    name: 'ipod',
    price: 1200,
    count: 15,
    img: ipod,
  },
  {
    id: 4,
    name: 'window',
    price: 2500,
    count: 9,
    img: window,
  },
];

const Products = () => (
  <div className="products">
    <ProductList products={products} />
  </div>
);

export default Products;
