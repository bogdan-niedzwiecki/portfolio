import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="social">
          {this.props.anchors.map(anchor => (
            <li className="social__item" key={anchor.content}>
              <a className="social__link" href={anchor.href} rel="noopener noreferrer" target="_blank">{anchor.content}</a>
            </li>))}
        </ul>
      </footer>
    )
  }
}

export default Footer;
