import React, { Component } from 'react';

import Layout from './components/Layout';
import SectionTitle from './components/SectionTitle';
import LogMessage from './components/LogMessage';
import Button from './components/Button';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logForButton: '',
    };
  }

  render() {
    const {
      logForButton,
    } = this.state;

    return (
      <Layout>
        <section>
          <SectionTitle>Button</SectionTitle>
          <Button onClick={this.onButtonClick}>Default</Button>
          <Button primary onClick={this.onButtonClick}>Primary</Button>
          <Button danger onClick={this.onButtonClick}>Danger</Button>
          <Button success onClick={this.onButtonClick}>success</Button>
          <Button info onClick={this.onButtonClick}>Info</Button>
          <LogMessage message={logForButton} />
        </section>
      </Layout>
    );
  }

  onButtonClick = (event) => {
    const message = `You clicked "${event.target.innerHTML}" !`;
    this.setState({ 'logForButton': message });
  }
};

export default App;
