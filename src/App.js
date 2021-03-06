import React, { Component } from 'react';

import Layout from './components/Layout';
import SectionTitle from './components/SectionTitle';
import LogMessage from './components/LogMessage';
import Button from './components/Button';
import InputText, { InputWrapper } from './components/InputText';
import InputRadio from './components/InputRadio';
import InputCheckbox from './components/InputCheckbox';
import FormBlock from './components/FormBlock';
import MoneyFormat from './components/MoneyFormat';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: '',
      someMessage: '',
      gender: '',
      languages: [],
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
        <h1>Playground for styled-components</h1>
        <section>
          <SectionTitle>Button</SectionTitle>
          <Button onClick={this.onButtonClick}>Default</Button>
          <Button primary onClick={this.onButtonClick}>Primary</Button>
          <Button danger onClick={this.onButtonClick}>Danger</Button>
          <Button success onClick={this.onButtonClick}>Success</Button>
          <Button info onClick={this.onButtonClick}>Info</Button>
          <LogMessage message={logForButton} />
        </section>
        <section>
          <SectionTitle>Input</SectionTitle>
          <InputWrapper>
            <InputText type="text" placeholder="Write some message here..." onChange={this.onInputChange} />
          </InputWrapper>

          <h4>Gender</h4>
          <InputRadio name="gender" value="Male" onClick={this.onGenderChange}>Male</InputRadio>
          <InputRadio name="gender" value="Female" onClick={this.onGenderChange}>Female</InputRadio>
          <InputRadio inline name="gender" value="Male" onClick={this.onGenderChange}>Male</InputRadio>
          <InputRadio inline name="gender" value="Female" onClick={this.onGenderChange}>Female</InputRadio>

          <h4>Languages</h4>
          <InputCheckbox value="Thai" onChange={this.onPickLanguage}>Thai</InputCheckbox>
          <InputCheckbox value="English" onChange={this.onPickLanguage}>English</InputCheckbox>
          <InputCheckbox value="Japan" onChange={this.onPickLanguage}>Japan</InputCheckbox>
          <InputCheckbox inline value="Chinese" onChange={this.onPickLanguage}>Chinese</InputCheckbox>
          <InputCheckbox inline value="French" onChange={this.onPickLanguage}>French</InputCheckbox>
          <InputCheckbox inline value="Indonesian" onChange={this.onPickLanguage}>Indonesian</InputCheckbox>
          <LogMessage message={logForInput} />

          <form>
            <FormBlock label="Form block 1">
              <InputText type="text" placeholder="Test input text 1..." />
            </FormBlock>
            <FormBlock label="Form block 2">
              <InputText type="text" placeholder="Test input text 2..." />
            </FormBlock>
          </form>
        </section>

        <div>
          <MoneyFormat currency="thb" amount={100} />
          <MoneyFormat currency="usd" amount={100} />
          <MoneyFormat currency="jpy" amount={100} />
        </div>
      </Layout>
    );
  }

  onButtonClick = (event) => {
    const buttonText = event.target.innerHTML;
    const message = `You clicked "${buttonText}" !`;

    this.setState({
      buttonText,
      'logForButton': message,
    });
  }

  onInputChange = (event) => {
    const someMessage = event.target.value;
    const message = [`You write "${someMessage}" !`];
    const { gender, languages } = this.state;

    if (gender) {
      message.push(`Your gender is ${gender}`);
    }

    if (languages.length > 0) {
      message.push(`Your can speak ${languages.length} language(s), ${languages.join(', ')}`);
    }

    this.setState({
      someMessage,
      'logForInput': message
    });
  }

  onGenderChange = (event) => {
    this.setState({ gender: event.target.value }, () => {
      const { someMessage } = this.state;
      this.onInputChange({ target: { value: someMessage } })
    });
  }

  onPickLanguage = (event) => {
    const languages = [ ...this.state.languages ];
    const { target } = event;
    const searchIndex = languages.indexOf(target.value);

    if (target.checked && searchIndex === -1) {
      languages.push(target.value);
    }
    else if (searchIndex > -1) {
      languages.splice(searchIndex, 1);
    }

    this.setState({ languages }, () => {
      const { someMessage } = this.state;
      this.onInputChange({ target: { value: someMessage } })
    });
  }
};

export default App;
