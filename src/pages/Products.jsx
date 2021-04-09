import { useState } from 'react';
import ProductList from '../components/Product/ProductList';
import ProductForm from '../components/Product/ProductForm';

// import notebook from '../assets/notebook.jpeg';

const Products = () => {
  const [val, setProducts] = useState([]);
  const handleAddProduct = newItem => {
    setProducts(prevState => [...prevState, newItem]);
  };

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />

      <ProductList products={val} />
    </div>
  );
};

export default Products;
