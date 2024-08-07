import { FC } from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import SpinnerComponent from '../Spinner/Spinner';
import { ProductListContainer, ProductGrid, ErrorText, NoProductsText } from './ProductList.styles';

interface Props {
  products: Product[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

const ProductList: FC<Props> = ({ products, status }) => {
  if (status === 'loading') {
    return <SpinnerComponent />;
  }

  if (status === 'failed') {
    return <ErrorText>Error loading products.</ErrorText>;
  }

  if (status === 'succeeded' && products.length === 0) {
    return <NoProductsText>No products found.</NoProductsText>;
  }

  return (
    <ProductListContainer>
      {status === 'succeeded' && (
        
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
