import React, { Component } from 'react';
const Axios = require('axios');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: "",
      guestMessage: ""
    }
    this.handleGuestName = this.handleGuestName.bind(this);
    this.handleGuestMessage = this.handleGuestMessage.bind(this);
  }

  handleGuestName(event) {
    this.setState({ guestName: event.target.value })
  }
  handleGuestMessage(event) {
    this.setState({ guestMessage: event.target.vale })
  }

  addToGuestBook = event => {
    event.preventDefault();
    this.setState({
      guestName: event.target.value,
      guestMessage: event.target.value
    })
    Axios.post('https://guestbook7.herokuapp.com', {
      guestName: this.state.guestName,
      guestMessage:this.state.guestMessage,
    }).then((result) => {
      console.log(result, 'signatures added');
    }).catch((err) => {
      console.log(err, 'signatures not added');
    });
    this.setState({
      guestName: "",
      guestMessage: ""
    })
  }

  render() {
    return (
      <div>
          <input
           onChange={this.handleGuestName}
           name="guestName"
           className="NameinputForm"
           value={this.state.guestName}
           placeholder="Enter your name"
            />
  <textarea
              onChange={this.handleGuestMessage}
              name="guestMessage"
              className="MessageinputForm"
              value={this.state.guestMessage}
              placeholder="Type a message"
               />
  <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>
      </div>
    )
  }
}

export class GuestName  extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages:[],
      
    };
  }

  componentDidMount() {
    fetch('https://guestbook7.herokuapp.com')
    .then(results => {
      return results.json();})
     .then(data =>{this.setState({messages:data})});
    }
  
    render(){
      const {messages} = this.state;
      return(
        
        <div>
          {messages.map(msg => {
            return(
            <div key={msg.name}>
            <h2 >{msg.message}</h2>
            <h4 >{msg.name}</h4>
            </div>
            )
          })
          }
          <div className="guestdataContainer">
          <h6>Guestbook Messages</h6>
          {messages}
        </div>


        </div>
      )
    }
  }

