import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset};
  
  body {
    line-height: 1.2;
  }
  
  button, a, label, input[type="checkbox"], input[type="radio"], select {
    cursor: pointer;
  }
  
  button {
    padding: 0;
    border: none;
    background-color: inherit;
  }
  
  a {
    color: #232323;
    text-decoration: none;
  }
`;

export default GlobalStyles;
