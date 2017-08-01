import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { pickColorFromProps } from '../utils';

import {
  buttonBackground,
  buttonColor,
} from './Style';

const borderColor = (colorSet) => {
  return pickColorFromProps(colorSet, (color) => darken(.2, color));
};
const hoverBackgroundColor = (colorSet) => {
  return pickColorFromProps(colorSet, (color) => lighten(.1, color));
}

const Button = styled.button`
  margin: 2px;
  padding: 1em 2em;
  border: 1px solid ${borderColor(buttonBackground)};
  background-color: ${pickColorFromProps(buttonBackground)};
  color: ${pickColorFromProps(buttonColor)};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${hoverBackgroundColor(buttonBackground)}
  }
`;

export default Button;
