import styled from 'styled-components';
import { Theme } from '@/styles/theme';

export const ProductListContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.large} auto;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const ProductGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoadingText = styled.p<{ theme: Theme }>`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
`;

export const ErrorText = styled.p<{ theme: Theme }>`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const NoProductsText = styled.p<{ theme: Theme }>`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 30px;

`;
