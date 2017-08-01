import React, { Component } from 'react';

import Layout from './components/Layout';
import SectionTitle from './components/SectionTitle';
import LogMessage from './components/LogMessage';
import Button from './components/Button';
import InputText, { InputWrapper } from './components/InputText';
import InputRadio from './components/InputRadio';
import InputCheckbox from './components/InputCheckbox';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logForButton: '',
      logForInput: '',
    };
  }

  render() {
    const {
      logForButton,
      logForInput,
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
        <section>
          <SectionTitle>Input</SectionTitle>
          <InputWrapper>
            <InputText type="text" placeholder="Write somthing here..." onChange={this.onInputChange} />
          </InputWrapper>

          <h4>Gender</h4>
          <InputRadio name="gender">Male</InputRadio>
          <InputRadio name="gender">Female</InputRadio>

          <h4>Language</h4>
          <InputCheckbox>Thai</InputCheckbox>
          <InputCheckbox>English</InputCheckbox>
          <InputCheckbox>Japan</InputCheckbox>
          <LogMessage message={logForInput} />
        </section>
      </Layout>
    );
  }

  onButtonClick = (event) => {
    const message = `You clicked "${event.target.innerHTML}" !`;
    this.setState({ 'logForButton': message });
  }

  onInputChange = (event) => {
    const message = `You write "${event.target.value}" !`;
    this.setState({ 'logForInput': message });
  }
};

export default App;
