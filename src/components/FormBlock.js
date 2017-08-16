import React from 'react';
import styled from 'styled-components';


const _FormBlock = ({ label, className, children }) => (
  <div className={className}>
    <label>{label}</label>
    {children}
  </div>
);

const FormBlock = styled(_FormBlock)`
  margin: 1em 0;

  > label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export default FormBlock;
