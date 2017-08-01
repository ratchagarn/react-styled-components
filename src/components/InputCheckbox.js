import React from 'react';
import styled from 'styled-components';

const InputCheckboxWrapper = styled.div`
  position: relative;
  margin: 1em 0;

  input {
    margin-right: 5px;
  }
`;

const Input = styled.input.attrs({
  type: 'checkbox'
})``;

const InputCheckbox = (props) => {
  const { children, ...inputProps } = props;

  return (
    <InputCheckboxWrapper>
      <label>
        <Input {...inputProps} />
        <span>{children}</span>
      </label>
    </InputCheckboxWrapper>
  );
};

export default InputCheckbox;
