import styled from 'styled-components';

const InputText = styled.input`
  display: block;
  width: 100%;
  padding: 10px 5px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  border-radius: 2px;
  transition: border-color .2s;

  &:focus {
    border-color: blue;
  }
`;

export default InputText;


export const InputWrapper = styled.div`
  width: 300px;
`;
