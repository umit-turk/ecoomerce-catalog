import { Theme } from '@/styles/theme';
import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.lightGray};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  overflow-y: auto;  
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CartTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  padding: 10px 15px; 
  cursor: pointer;
  color: ${({ theme }: { theme: Theme }) => theme.colors.black};
  border-radius: 5px;
  
  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  }
`;


export const CartItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const CartItemDetails = styled.div`
  flex: 1;
`;

export const CartItemTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const CartItemText = styled.p`
  margin: 0.5rem 0;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }
`;

export const QuantityDisplay = styled.span`
  margin: 0 1rem;
  font-size: 1rem;
`;

export const RemoveButton = styled.button`
  background-color: #ff6666;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1rem;
`;
