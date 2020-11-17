import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Header extends Component {
  constructor() {
    super();
    window.onSubmit = this.onSubmit;
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_etzxb6u', 'template_8fperqm', e.target, 'user_yfExfPTO00ec5x4nkN0Pd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  onSubmit(token) {
    document.querySelector(".form").requestSubmit();
  }

  render() {
    return (
      <form className="form"
        onSubmit={(e) => this.sendEmail(e)}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="user_message" required />
        <button className="g-recaptcha" data-sitekey="6LezB-QZAAAAADrO_-4lNNbozWX_fdmKLGl7wbN-" data-callback="onSubmit">Send</button>
      </form>
    )
  }
}

export default Header;
