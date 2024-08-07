import { FC } from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListContainer, ProductGrid } from './ProductList.styles';

interface Props {
  products: Product[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <ProductListContainer>
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList;
