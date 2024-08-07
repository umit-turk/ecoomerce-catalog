import styled from 'styled-components';
import { Theme } from '@/styles/theme';

export const FooterContainer = styled.footer<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  p {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.875rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.75rem;
    }
  }
`;
