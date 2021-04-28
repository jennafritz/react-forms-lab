import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainder: props.maxChars
    };
  }

  showRemainder = event => {
    let remainder = (this.props.maxChars - event.target.value.length)
    this.setState({
      [event.target.name]: event.target.value,
      remainder
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value = {this.state.message}
          onChange = {event => 
            this.showRemainder(event)
          }
          />
          <p>You have {this.state.remainder} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
