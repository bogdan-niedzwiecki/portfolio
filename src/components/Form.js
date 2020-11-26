import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Header extends Component {

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_etzxb6u', 'template_8fperqm', e.target, 'user_yfExfPTO00ec5x4nkN0Pd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  render() {
    return (
      <form className="form" autoComplete="off" onSubmit={e => this.sendEmail(e)}>
        <div className="form__field">
          <input placeholder="Your name" className="form__input" type="text" id="user_name" name="user_name" required spellCheck="false" />
          <label className="form__label" htmlFor="user_name">Your Name</label>
          <div className="form__border"></div>
        </div>
        <div className="form__field">
          <input placeholder="Your email" className="form__input" type="email" id="user_email" name="user_email" required spellCheck="false" />
          <label className="form__label" htmlFor="user_email">Your Email</label>
          <div className="form__border"></div>
        </div>
        <div className="form__field form__field--textarea">
          <textarea placeholder="Your message" className="form__input form__input--textarea" id="user_message" name="user_message" required spellCheck="false" />
          <label className="form__label" htmlFor="user_message">Your message</label>
          <div className="form__border"></div>
        </div>
        <button className="form__submit" type="submit">Share your thoughts</button>
      </form>
    )
  }
}

export default Header;
