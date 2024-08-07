import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 0.98; /* Allows the search bar container to grow */
`;

export const StyledInput = styled.input`
  height: 30px;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  flex: 1; /* Allows the input to grow within its container */
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
