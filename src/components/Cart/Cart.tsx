"use client";

import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { removeProductFromCart, increaseQuantity, decreaseQuantity } from '../../features/cartSlice';
import { 
  CartContainer, 
  CartHeader, 
  CartTitle, 
  CloseButton, 
  CartItem, 
  CartItemImage, 
  CartItemDetails, 
  CartItemTitle, 
  CartItemText, 
  QuantityWrapper, 
  QuantityButton, 
  QuantityDisplay, 
  RemoveButton, 
  CartTotal 
} from './Cart.styles';

interface CartProps {
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>()

  const handleRemove = (id: number) => {
    dispatch(removeProductFromCart(id));
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Shopping Cart</CartTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </CartHeader>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map(item => (
        <CartItem key={item.product.id}>
          <CartItemImage src={item.product.image} alt={item.product.title} />
          <CartItemDetails>
            <CartItemTitle>{item.product.title}</CartItemTitle>
            <QuantityWrapper>
              <QuantityButton onClick={() => handleDecrease(item.product.id)}>-</QuantityButton>
              <QuantityDisplay>{item.quantity}</QuantityDisplay>
              <QuantityButton onClick={() => handleIncrease(item.product.id)}>+</QuantityButton>
            </QuantityWrapper>
            <CartItemText>Total: ${(item.product.price * item.quantity).toFixed(2)}</CartItemText>
            <RemoveButton onClick={() => handleRemove(item.product.id)}>Remove</RemoveButton>
          </CartItemDetails>
        </CartItem>
      ))}
      {cartItems.length > 0 && (
        <CartTotal>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </CartTotal>
      )}
    </CartContainer>
  );
};

export default Cart;
