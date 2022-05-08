import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section>
        Balance: ${this.props.amount}
      </Section>
    );
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
