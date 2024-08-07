import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem;
  padding-top: 102px;
`;

export const CartWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1001;
`;

export const FilterButton = styled.button`
  height: 30px;
  padding: 0 1rem;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3; 
  }
`;

export const SearchContainer = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.large} auto;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
