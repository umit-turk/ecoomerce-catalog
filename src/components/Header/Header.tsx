"use client";
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, HeaderWrapper, Logo, CartIcon, Badge } from './Header.styles';
import { RootState } from '@/store';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: FC<HeaderProps> = ({ onCartClick }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>E-Commerce</Logo>
        <CartIcon onClick={onCartClick}>
          🛒
          {cartItems.length > 0 && <Badge>{cartItems.length}</Badge>}
        </CartIcon>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
