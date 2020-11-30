import React, { Component, createRef } from 'react';
import emailjs from 'emailjs-com';
import Baffle from "baffle-react";
import './Form.scss';

class Form extends Component {

  dash = createRef();

  state = {
    name: '',
    email: '',
    message: '',
    firstLine: 'Contact',
    secondLine: 'Me'
  }

  sendEmail(e) {
    e.preventDefault();
    this.dash.current.style.width = "0";
    this.setState({
      name: '',
      email: '',
      message: '',
      firstLine: 'Picked It',
      secondLine: 'Up'
    });
    this.props.setObfuscate(true);
    emailjs.sendForm('service_etzxb6u', 'template_8fperqm', e.target, 'user_yfExfPTO00ec5x4nkN0Pd')
      .then(() => {
        this.props.setObfuscate(false);
      }, error => {
        console.log(error.text);
      });
  }

  render() {
    const { name, email, message, firstLine, secondLine } = this.state;
    const { characters, activeSection, obfuscate } = this.props;

    return (
      <div className="container">
        <form className="form" autoComplete="off" onSubmit={e => this.sendEmail(e)}>
          <div className="form__field">
            <input placeholder="Your name" className="form__input" type="text" id="user_name" name="user_name" value={name} onChange={e => this.setState({ name: e.target.value })} required spellCheck="false" />
            <label className="form__label" htmlFor="user_name">Your Name</label>
            <div className="form__border"></div>
          </div>
          <div className="form__field">
            <input placeholder="Your email" className="form__input" type="email" id="user_email" name="user_email" value={email} onChange={e => this.setState({ email: e.target.value })} required spellCheck="false" />
            <label className="form__label" htmlFor="user_email">Your Email</label>
            <div className="form__border"></div>
          </div>
          <div className="form__field form__field--textarea">
            <textarea placeholder="Your message" className="form__input form__input--textarea" id="user_message" name="user_message" value={message} onChange={e => this.setState({ message: e.target.value })} required spellCheck="false" />
            <label className="form__label" htmlFor="user_message">Your message</label>
            <div className="form__border"></div>
          </div>
          <button className="form__submit" type="submit">Share your thoughts</button>
        </form>
        <div className="hero">
          <h2 className="title title--contact">
            <Baffle
              speed={100}
              characters={characters}
              obfuscate={activeSection === 2 ? obfuscate : false}
              revealDuration={2000}
            >{firstLine}
            </Baffle>
            <br /><span ref={this.dash} className="dash"></span>
            <Baffle
              speed={100}
              characters={characters}
              obfuscate={activeSection === 2 ? obfuscate : false}
              revealDuration={2000}
            >{secondLine}
            </Baffle>
          </h2>
          <p className="subtitle">It is very important for me to keep in touch with you, so I am always ready to answer any question that interests you.<span className="highlighted" data-stroke="&nbsp;Shoot!">&nbsp;Shoot!</span></p>
        </div>
      </div>
    )
  }
}

export default Form;
