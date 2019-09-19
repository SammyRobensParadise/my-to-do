import React from 'react';
import './App.css';
import axios from 'axios';
import titleStyle from './style';
import paraStyle from './style';
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
      hasAuthTokenErrors: false,
      ErrorMessageName: " ",
      ErrorMessageNumber: " ",
      ErrorMessageAuthToken: " ",
      hasUploadErrorsIndex: 0,
      hasNameErrorsIndex: 0,
      hasNumberErrorsIndex: 0,
      hasAuthTokenErrorsIndex: 0,
      validName: false,
      validNumber: false,
      validAuthToken: false,
    }
  }
  componentDidUpdate() {
  }
  validateInputsAndSend = () => {
    this.CheckCorrectNameFormat();
    this.CheckCorrectNumberFormat();
    this.CheckCorrectAuthTokenFormat();
  }
  CheckCorrectNameFormat = () => {
    let userNameInput = document.getElementById('name-input-form').value;
    userNameInput.toString();
    let __space = ' ';
    if (userNameInput.includes(__space) || userNameInput === null || userNameInput === "") {
      var currentErrorMessage = this.state.ErrorMessageName;
      var currentErrorMessageIndex = this.state.hasNameErrorsIndex;
      if (this.state.hasNameErrors) {
        this.setState({
          hasNameErrorsIndex: currentErrorMessageIndex + 1
        })
      } else {
        this.setState({
          hasNameErrors: true,
          ErrorMessageName: currentErrorMessage + "Invalid name. Your name cannot contain spaces or be blank.",
          hasNameErrorsIndex: currentErrorMessageIndex + 1
        })
      }
    } else {
      this.setState({
        validName: true
      })
      userNameInput = userNameInput.toLowerCase();
      this.sendDataName(userNameInput);

    }
  }
  CheckCorrectNumberFormat = () => {
    let userNumberInput = document.getElementById('whats-app-num-form').value;
    userNumberInput.toString();
    while (userNumberInput.includes("-") || userNumberInput.includes(" ")) {
      userNumberInput = userNumberInput.replace("-", "");
      userNumberInput = userNumberInput.replace(" ", "");
    }
    if (userNumberInput.match(/[a-z]/i) || userNumberInput === null || userNumberInput === "") {
      var currentErrorMessage = this.state.ErrorMessageNumber;
      var currentErrorMessageIndex = this.state.hasNameErrorsIndex;
      if (this.state.hasNumberErrors) {
        this.setState({
          hasNumberErrorsIndex: currentErrorMessageIndex + 1
        })
      } else {
        this.setState({
          hasNumberErrors: true,
          ErrorMessageNumber: currentErrorMessage + 'Invalid Whatsapp Number. Your number cannot contain letters or be blank.',
          hasNumberErrorsIndex: currentErrorMessageIndex + 1
        });
      }
    } else {
      this.setState({
        validNumber: true
      })
    }
  }
  CheckCorrectAuthTokenFormat = () => {
    let userActivationToken = document.getElementById('activation-token-form').value;
    userActivationToken.toString();
    if (userActivationToken === null || userActivationToken === "" || userActivationToken.includes(" ") || userActivationToken.includes("=")) {
      var currentErrorMessage = this.state.ErrorMessageAuthToken;
      var currentErrorMessageIndex = this.state.hasAuthTokenErrorsIndex;
      if (this.state.hasAuthTokenErrors) {
        this.setState({
          hasAuthTokenErrorsIndex: currentErrorMessageIndex + 1
        })
      } else {
        this.setState({
          hasAuthTokenErrors: true,
          ErrorMessageAuthToken: currentErrorMessage + "Invalid Activation Token",
          hasAuthTokenErrorsIndex: currentErrorMessageIndex + 1
        });
      }
    } else {
      this.setState({
        validAuthToken: true
      })
    }
  }
  sendDataName = (dataname) => {
  }
  render() {
    const defaultState = (!this.state.hasAuthToken && !this.state.hasUploadErrors && !this.state.hasNameErrors && !this.state.hasNumberErrors && !this.state.noDataMatch && !this.state.hasAuthTokenErrors);
    const errorState = (this.state.hasAuthToken || this.state.hasUploadErrors || this.state.hasNameErrors || this.state.hasNumberErrors || this.state.noDataMatch || this.state.hasAuthTokenErrors)
    const validDataState = (this.state.validAuthToken && this.state.validName && this.state.validNumber);
    if (validDataState) {
      return <div className="App"><p>loading... Do not close your browser window</p></div>
    } else
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
              <FormGroup>
                <Label for="number">Activation Token</Label>
                <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type="text" name="activation-token" id="activation-token-form" placeholder="token" />
              </FormGroup>
              <Button style={{ backgroundColor: '#33cc33', height: "2rem", width: '6rem', marginTop: '30px', borderRadius: '3px 3px 3px 3px' }} onClick={this.validateInputsAndSend}>Submit</Button>
            </Form>
            <p style={paraStyle}>What is To-DOs? Its a small app that will send you a whatsapp notification reminding you what you must do for that day!</p>
            <p style={paraStyle}>All you need to do is input your whatsapp phone number and your first name, an activation token and you should be good to go!</p>
          </div>
        );
      } else if (errorState) {
        return (
          <div className="App">
            <h1 style={titleStyle}>Welcome to the To-DOs</h1>
            <p style={paraStyle}>Enter your name and whatsapp phone number</p>
            <p style={{ color: 'red' }}>The following errors occured:</p>
            <p style={{ color: 'red' }}>{this.state.ErrorMessageName + "   (" + this.state.hasNameErrorsIndex + ")"}</p>
            <p style={{ color: 'red' }}>{this.state.ErrorMessageNumber + "   (" + this.state.hasNumberErrorsIndex + ")"}</p>
            <p style={{ color: 'red' }}>{this.state.ErrorMessageAuthToken + "   (" + this.state.hasAuthTokenErrorsIndex + ")"}</p>

            <Form>
              <FormGroup>
                <Label for="first name">First Name</Label>
                <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type='text' name="name" id="name-input-form" placeholder="ex: josh" />
              </FormGroup>
              <FormGroup>
                <Label for="number">Whats-app Number</Label>
                <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type="text" name="whats-app-num" id="whats-app-num-form" placeholder="ex: 123-456-7890" />
              </FormGroup>
              <FormGroup>
                <Label for="number">Activation Token</Label>
                <Input style={{ backgroundColor: ' #f2f2f2', marginLeft: '20px', marginTop: '30px' }} type="text" name="activation-token" id="activation-token-form" placeholder="token" />
              </FormGroup>
              <Button style={{ backgroundColor: '#33cc33', height: "2rem", width: '6rem', marginTop: '30px', borderRadius: '3px 3px 3px 3px' }} onClick={this.validateInputsAndSend}>Submit</Button>
            </Form>
            <p style={paraStyle}>What is To-DOs? Its a small app that will send you a whatsapp notification reminding you what you must do for that day!</p>
            <p style={paraStyle}>All you need to do is input your whatsapp phone number and your first name, an activation token and you should be good to go!</p>
          </div>
        )
      } else {
        return (<p> 403: An unknown error occured :(
    </p>)
      }
  }
}
export default App;
