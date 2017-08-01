import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin: 1em 0;
  padding: 1.2em;
  font-size: .8em;
  border: 2px dashed #AAA;
  background-color: #FCFCFC;

  > p {
    margin: 0 0 .5em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LogMessage = ({ message }) => {
  if (typeof message === 'object') {
    const allMessages = message.map((m, i) => <p key={i}>{m}</p>);
    return <Message>{allMessages}</Message>;
  }
  else if (message) {
    return <Message>{message}</Message>;
  }
  else {
    return null;
  }
}

export default LogMessage;
