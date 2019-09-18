export default class dataHander {
    constructor(props,state,sendData,recieveData){
        this.state = {
            localProps: props,
            referenceState: state,
            dataTobeSent: sendData,
            dataHandlerTobeRecieved: recieveData
        }
    }
}