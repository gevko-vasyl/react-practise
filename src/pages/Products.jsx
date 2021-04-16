import { useState, useEffect } from 'react';
import ProductList from '../components/Product/ProductList';
import ProductForm from '../components/Product/ProductForm';
import {
  getProducts,
  addProducts,
  removeProducts,
} from '../utils/api/productsApi';

// import notebook from '../assets/notebook.jpeg';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const handleAddProduct = newItem => {
    // setProducts(prevState => [...prevState, newItem]);
    setIsLoading(true);
    addProducts(newItem)
      .then(data => setProducts(prev => [...prev, data]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDelete = id => {
    setIsLoading(true);
    removeProducts(id)
      .then(() => setProducts(prev => prev.filter(item => item.id !== id)))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // ! ComponentDidMount
  useEffect(() => {
    // const data= JSON.parse(localStorage.getItem('products'))
    setIsLoading(true);

    getProducts()
      .then(data => setProducts(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  //!ComponentDidUpdate
  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />

      {error && <p>{error}</p>}
      {isLoading && <p>is loading....</p>}

      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Products;
