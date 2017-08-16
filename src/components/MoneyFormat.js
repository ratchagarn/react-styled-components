import React from 'react';
import styled from 'styled-components';


const THB = 'THB';
const USD = 'USD';
const JPY = 'JPY';

const pickBgColorByCurrency = () => ({ currency }) => {
  switch (currency) {
    case THB: return `background-color: blue;`;
    case USD: return `background-color: green;`;
    case JPY: return `background-color: red;`;
    default: return `background-color: grey;`;
  }
};

const Money = styled.div`
  display: inline-block;
  margin-right: .5em;
  font-size: 14px;
  line-height: 14px;

  &:last-child {
    margin-right: 0;
  }
`;

const Currency = styled.span`
  display: table-cell;
  padding: 2px;
  vertical-align: middle;
  ${pickBgColorByCurrency()}
  color: white;
  font-size: 10px;
  border-radius: 2px;
`;

const Amount = styled.span`
  display: table-cell;
  padding-top: 2px;
  padding-bottom: 2px;
  vertical-align: middle;
  font-size: 12px;
`;

const MoneyFormat = ({ currency, amount }) => {
  const currencyUpperCase = currency.toUpperCase();

  switch (currencyUpperCase) {
    case THB:
      return (
        <Money>
          <Currency currency={currencyUpperCase}>{THB}</Currency>
          <Amount>{amount}</Amount>
        </Money>
      );
    case USD:
      return (
        <Money>
          <Currency currency={currencyUpperCase}>{USD}</Currency>
          <Amount>{amount}</Amount>
        </Money>
      );
    case JPY:
      return (
        <Money>
          <Currency currency={currencyUpperCase}>{JPY}</Currency>
          <Amount>{amount}</Amount>
        </Money>
      );
    default:
      return (
        <Money>
          <Amount>{amount}</Amount>
        </Money>
      );
  }
};

export default MoneyFormat;