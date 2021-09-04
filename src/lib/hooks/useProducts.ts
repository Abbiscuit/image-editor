import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { httpGetAllProducts } from './requests';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const fetchedProducts = await httpGetAllProducts();
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};
