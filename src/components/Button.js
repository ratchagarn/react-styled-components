import styledProps from 'styled-props';
import styled from 'styled-components';

import {
  buttonBackground,
  buttonColor,
} from './Style';

const Button = styled.button`
  margin: 2px;
  padding: 1em 2em;
  border: 1px solid ${styledProps(buttonBackground)};
  background-color: ${styledProps(buttonBackground)};
  color: ${styledProps(buttonColor)};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

export default Button;