import styled from 'styled-components';

type ToastrType = 'success' | 'error';

export const ToastrContainer = styled.div<{ show: boolean; type: ToastrType }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  opacity: 1;
  display: ${({ show }) => (show ? 'block' : 'none')}; /* Control visibility with display */
  transition: opacity 0.5s ease;
  z-index: 1005;
  max-width: 300px;
  text-align: center;
`;
