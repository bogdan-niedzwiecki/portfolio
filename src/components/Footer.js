import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const social = [{ href: 'https://www.facebook.com/niedzwiecki/', content: 'Fb.' },
    { href: 'https://www.linkedin.com/in/bogdan-niedzwiecki', content: 'Li.' },
    { href: 'https://github.com/bogdan-niedzwiecki', content: 'Gh.' }];
    
    return (
      <footer className="footer">
        <ul className="social">
          {social.map(item => (
            <li className="social__item" key={item.content}>
              <a className="social__link" href={item.href} rel="noopener noreferrer" target="_blank">{item.content}</a>
            </li>))}
        </ul>
      </footer>
    )
  }
}

export default Footer;
