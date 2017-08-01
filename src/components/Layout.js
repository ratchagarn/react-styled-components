import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Verdana, Tahoma;
    font-size: 16px;
  }
`;

const Layout = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

export default Layout;
