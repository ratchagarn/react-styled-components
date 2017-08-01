import React from 'react';
import styled from 'styled-components';

const InputCheckboxWrapper = styled.div`
  position: relative;
  margin: 1em 0;
  padding-left: 24px;

  label {
    user-select: none;
  }

  input {
    display: none;
    margin-right: 5px;

    &:checked + div {
      border-color: #2681E2;
      background-color: #2681E2;

      &:before {
        opacity: 1;
        transform: rotate(-45deg);
      }
      &:after {
        opacity: 1;
        transform: rotate(45deg);
      }
    }
  }
`;

const Input = styled.input.attrs({
  type: 'checkbox'
})``;

const BeautifulInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  transition: background-color .2s;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 6px;
    margin-top: 6px;
    margin-left: 3px;
    background-color: white;
    opacity: 0;
    transform: rotate(0);
    transition: .2s;
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 10px;
    margin-top: 2px;
    margin-left: 8px;
    background-color: white;
    opacity: 0;
    transform: rotate(0);
    transition: .2s;
  }
`;

const InputCheckbox = (props) => {
  const { children, ...inputProps } = props;

  return (
    <InputCheckboxWrapper>
      <label>
        <Input {...inputProps} />
        <BeautifulInput />
        <span>{children}</span>
      </label>
    </InputCheckboxWrapper>
  );
};

export default InputCheckbox;