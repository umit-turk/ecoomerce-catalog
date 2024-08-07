"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProducts, setLoading, setFailed } from '../features/productSlice';
import { fetchProducts, fetchFilteredProducts } from '../utils/api';

export const useProducts = (searchQuery = '') => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const [filter, setFilter] = useState<{ category: string, minPrice: number, maxPrice: number }>({
    category: '',
    minPrice: 0,
    maxPrice: 1000
  });

  useEffect(() => {
    const loadProducts = async () => {
      dispatch(setLoading());
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch {
        dispatch(setFailed());
      }
    };

    loadProducts();
  }, [dispatch]);

  const applyFilter = async () => {
    dispatch(setLoading());
    try {
      const data = await fetchFilteredProducts(filter);
      dispatch(setProducts(data));
    } catch {
      dispatch(setFailed());
    }
  };

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    products: filteredProducts,
    status,
    setFilter,
  };
};
