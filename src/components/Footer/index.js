import React from 'react';
import './Footer.css';

export default function Footer({ copyright = "© Copyright 2017 ThoughtWorks" }) {
  return (
    <footer className="c-wrapper--footer">
      <p>{copyright}</p>
    </footer>
  )
}
