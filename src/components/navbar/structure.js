import styled from 'styled-components';

// Navbar structure
export const Nav = styled.nav`
  display: flex;
  height: 40px;
  background-color: ${({ theme }) => theme.navBar};
  color: ${({ theme }) => theme.color};
`;

//  Nav wraper
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 0px 20px;
  `;
