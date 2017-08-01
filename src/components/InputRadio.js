import React from 'react';
import styled from 'styled-components';

const InputRadioWrapper = styled.div`
  position: relative;
  margin: 1em 0;
  padding-left: 24px;

  input {
    display: none;
    margin-right: 5px;

    &:checked + div {
      &:after {
        opacity: 1;
      }
    }
  }
`;

const Input = styled.input.attrs({
  type: 'radio'
})``;

const BeautifulInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  border-radius: 50%;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    margin-left: -5px;
    border-radius: 50%;
    background-color: #2681E2;
    opacity: 0;
    transition: opacity .2s;
  }
`;

const InputRadio = (props) => {
  const { children, ...inputProps } = props;

  return (
    <InputRadioWrapper>
      <label>
        <Input {...inputProps} />
        <BeautifulInput />
        <span>{children}</span>
      </label>
    </InputRadioWrapper>
  );
};

export default InputRadio;
