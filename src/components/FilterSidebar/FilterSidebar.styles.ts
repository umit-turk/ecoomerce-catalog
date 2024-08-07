import styled from 'styled-components';
import { Theme } from '@/styles/theme';

export const SidebarContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }: { theme: Theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.border};
  transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.large};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background: ${({ theme }: { theme: Theme }) => theme.colors.secondary};
  border: none;
  color: white;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.small};
  border-radius: ${({ theme }: { theme: Theme }) => theme.spacing.small};
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.secondary};
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

export const FilterTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const FilterOption = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const FilterInput = styled.input`
  margin-right: 0.5rem;
`;

export const PriceRangeLabel = styled.label`
  display: block;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const PriceRangeInput = styled.input`
  width: 100%;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.small};
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.border};
  border-radius: ${({ theme }: { theme: Theme }) => theme.spacing.small};
`;

export const FilterButton = styled.button`
  background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  border: none;
  color: white;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.medium};
  border-radius: ${({ theme }: { theme: Theme }) => theme.spacing.small};
  cursor: pointer;
  font-size: 1rem;
  width: 100%;

  &:hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }
`;
