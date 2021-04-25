import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import sendRequest from '../ajax'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userMail: '',
      userSubj: '',
      userText: ''
    }
  }
  render () {
    return (
        <FeedbackForm 
        add={this.add.bind(this)}
        send={this.send.bind(this)}
        />
    )
  }
  add(data,inputsName) {
    inputsName === 'name' ? this.setState({userName: data}): false,
    inputsName === 'email' ? this.setState({userMail: data}): false;
    inputsName === 'subject' ? this.setState({userSubj: data}): false;
    inputsName === 'subject-body' ? this.setState({userText: data}):false;
  }
  send(event) {
    event.preventDefault();
    event.target.reset();
    const userData = this.state;
    return sendRequest(userData);
  }
}

export default App;