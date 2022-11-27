import React from 'react';
import './Footer.css';

export default function Footer({ copyright = "© Copyright 2022 ZhuFei" }) {
  return (
    <footer className="c-wrapper--footer">
      <p>{copyright}</p>
    </footer>
  )
}
