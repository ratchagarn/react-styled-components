import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin: 1em 0;
  padding: 1.2em;
  font-size: .8em;
  border: 2px solid #AAA;
  background-color: #F6F6F6;
`;

const LogMessage = ({ message }) => {
  return message ? <Message>{message}</Message> : null;
}

export default LogMessage;
