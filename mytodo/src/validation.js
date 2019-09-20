import React from 'react';
import './App.css';
import axios from 'axios';
import titleStyle from './style';
import paraStyle from './style';
import * as firebase from 'firebase'
import dataHandler from './dataHandler'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import dataHander from './dataHandler';
class validation extends React.Component {
    constructor(props, state, sendData, recieveData) {
        super(props);
        var config = {
            apiKey: "AIzaSyBQjROjDE6Kap7JF-BomwGBITtMunusvZM",
            authDomain: "https://my-to-do-db.firebaseapp.com/",
            databaseURL: "https://my-to-do-db.firebaseio.com/",
            storageBucket: "gs://my-to-do-db.appspot.com/"
        };
        firebase.initializeApp(config);
        this.state = {
            localProps: props,
            referenceState: state,
            dataTobeSent: sendData,
            dataHandlerTobeRecieved: recieveData,
            db: firebase.database()
        }
    }
    render() {
        return (
            <div className="validation">
                <p>The following are the next steps</p>
            </div>
        )
    }
}
export default validation;