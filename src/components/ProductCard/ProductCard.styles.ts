import styled from 'styled-components';
import { Theme } from '@/styles/theme';

export const Card = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.small};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  transition: transform 0.3s, box-shadow 0.3s;
  width: 275px;
  margin: ${({ theme }) => theme.spacing.medium} auto;
  height: 350px; /* Fixed height */
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img<{ theme: Theme }>`
  width: 100%;
  height: 60%; /* Fixed height */
  object-fit: cover; /* Ensures the image is proportionally cropped */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div<{ theme: Theme }>`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  height: 40%; /* Fixed height */
`;

export const Title = styled.h2<{ theme: Theme }>`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.p<{ theme: Theme }>`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => theme.spacing.small} 0;
  text-align: center;
`;

export const AddButton = styled.button<{ theme: Theme }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
