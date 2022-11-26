import React from 'react';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.jpg';
import './Header.css';

export default function Header({ contentContext }) {

  return (
    <header className="c-wrapper--header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt={contentContext.logoAlt} />
        </div>
        <div className="avatar">
          <img src={avatar} alt={contentContext.avatarAlt} />
        </div>
      </div>
    </header>
  )
}
