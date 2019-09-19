import * as firebase from 'firebase'
export default class dataHander {
    constructor(props,state,sendData,recieveData){
        var config = {
            apiKey: "AIzaSyBQjROjDE6Kap7JF-BomwGBITtMunusvZM",
            authDomain: "https://my-to-do-db.firebaseapp.com/",
            databaseURL: "https://my-to-do-db.firebaseio.com/",
            storageBucket: "http://my-to-do-db.appspot.com/"
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

}