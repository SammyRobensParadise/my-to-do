import React, { Component } from 'react';
import './App.css';
import titleStyle from './style'
import paraStyle from './style'
import inputStyle from './style'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUploadErrors: false,
      hasNameErrors: false,
      hasNumberErrors: false,
      noDataMatch: false,
      hasAuthToken: false,
      ErrorMessageName: "WARNING ",
      ErrorMessageNumber: " WARNING "
    }
  }
  componentDidUpdate() {
    this.CheckCorrectNameFormat();
    this.CheckCorrectNameFormat();
  }
  validateInputsAndSend = () => {
    this.CheckCorrectNameFormat();
    this.CheckCorrectNumberFormat();
  }
  CheckCorrectNameFormat = () => {
    let userNameInput = document.getElementById('name-input-form').value;
    userNameInput.toString();
    console.log(userNameInput)
    let __space = ' ';
    if (userNameInput.includes(__space) || userNameInput === null) {
      console.log(true);
      var currentErrorMessage = this.state.ErrorMessageName;
      this.setState({
        hasNameErrors: true,
        ErrorMessageName: currentErrorMessage + ", Invalid name. Your name cannot contain spaces"
      })
    }
  }
  CheckCorrectNumberFormat = () => {
    let userNumberInput = document.getElementById('whats-app-num-form').value;
    userNumberInput.toString();
    while(userNumberInput.includes("-") || userNumberInput.includes(" ")){
    userNumberInput= userNumberInput.replace("-", "");
    userNumberInput= userNumberInput.replace(" ", "");
    }
    console.log(userNumberInput);
    if (userNumberInput.match(/[a-z]/i)) {
      var currentErrorMessage = this.state.ErrorMessageNumber;
      this.setState({
        hasNumberErrors: true,
        ErrorMessageNumber: currentErrorMessage + ', Invalid Whatsapp Number. Your number cannot contain letters'
      });

    }
  }

  render() {
    var defaultState = (!this.state.hasAuthToken && !this.state.hasUploadErrors && !this.state.hasNameErrors && !this.state.hasNumberErrors && !this.state.noDataMatch);
    var errorState = (this.state.hasAuthToken || this.state.hasUploadErrors || this.state.hasNameErrors || this.state.hasNumberErrors || this.state.noDataMatch)
    if (defaultState) {
      return (
        <div className="App">
          <h1 style={titleStyle}>Welcome to the To-DOs</h1>
          <p style={paraStyle}>Enter your name and whatsapp phone number</p>
          <Form>
            <FormGroup>
              <Label for="first name">First Name</Label>
              <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type='text' name="name" id="name-input-form" placeholder="ex: josh" />
            </FormGroup>
            <FormGroup>
              <Label for="number">Whats-app Number</Label>
              <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type="text" name="whats-app-num" id="whats-app-num-form" placeholder="ex: 123-456-7890" />
            </FormGroup>
            <Button style={{ backgroundColor: '#33cc33', height: "2rem", width: '6rem', marginTop: '30px', borderRadius: '3px 3px 3px 3px' }} onClick={this.validateInputsAndSend}>Submit</Button>
          </Form>
          <p style={paraStyle}>What is To-DOs? Its a small app that will send you a whatsapp notification reminding you what you must do for that day!</p>
          <p style={paraStyle}>All you need to do is input your whatsapp phone number and your first name and you should be good to go!</p>
        </div>
      );
    } else if (errorState) {
      return (
        <div className="App">
          <h1 style={titleStyle}>Welcome to the To-DOs</h1>
          <p style={paraStyle}>Enter your name and whatsapp phone number</p>
          <p style={{ color: 'red' }}>The following errors occured:</p>
          <p style={{ color: 'red' }}>{this.state.ErrorMessageName}</p>
          <p style={{ color: 'red' }}>{this.state.ErrorMessageNumber}</p>
          <Form>
            <FormGroup>
              <Label for="first name">First Name</Label>
              <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type='text' name="name" id="name-input-form" placeholder="ex: josh" />
            </FormGroup>
            <FormGroup>
              <Label for="number">Whats-app Number</Label>
              <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type="text" name="whats-app-num" id="whats-app-num-form" placeholder="ex: 123-456-7890" />
            </FormGroup>
            <Button style={{ backgroundColor: '#33cc33', height: "2rem", width: '6rem', marginTop: '30px', borderRadius: '3px 3px 3px 3px' }} onClick={this.validateInputsAndSend}>Submit</Button>
          </Form>
          <p style={paraStyle}>What is To-DOs? Its a small app that will send you a whatsapp notification reminding you what you must do for that day!</p>
          <p style={paraStyle}>All you need to do is input your whatsapp phone number and your first name and you should be good to go!</p>
        </div>
      )
    } else {
      return (<p>An unknown error occured :(
    </p>)
    }
  }
}
export default App;
