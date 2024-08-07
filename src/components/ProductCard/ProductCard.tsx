import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../features/cartSlice';
import { Product } from '../../types';
import { Card, Image, Content, Title, Price, AddButton } from './ProductCard.styles';
import { AppDispatch } from '@/store';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Content>
        <Title>{product.title}</Title>
        <Price>${product.price.toFixed(2)}</Price>
        <AddButton onClick={handleAddToCart}>Add to Cart</AddButton>
      </Content>
    </Card>
  );
};

export default ProductCard;
