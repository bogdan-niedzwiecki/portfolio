import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <ul className="menu" id="menu">
            {this.props.anchors.map(anchor => (
              <li className="menu__item" data-menuanchor={anchor} key={anchor}>
                <a className="menu__link" href={`#${anchor}`} data-stroke={anchor}>{anchor}</a>
              </li>))}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
