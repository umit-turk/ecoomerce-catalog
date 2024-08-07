import styled from 'styled-components';
import { Theme } from '@/styles/theme';

export const HeaderContainer = styled.header<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.text};
  position: fixed; /* Fixed position to keep it at the top */
  top: 0; /* Align it to the top of the viewport */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure it's above other content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: to add a subtle shadow */
`;

export const HeaderWrapper = styled.div<{ theme: Theme }>`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left:16px
`;

export const Logo = styled.h1<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  margin: 0;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const CartIcon = styled.button<{ theme: Theme }>`
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: 50%;
  width: 50px; /* Width and height to make it a circle */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; /* Darker color on hover */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
`;

export const Badge = styled.span<{ theme: Theme }>`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.secondary}; /* Different color for the badge */
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;
