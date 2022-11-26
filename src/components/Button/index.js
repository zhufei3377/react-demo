import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ attributes = {}, className, children }) {
  const combinedClassName = classNames('c-button', className);

  return (
    <button {...attributes} className={combinedClassName}>{children}</button>
  )
}

Button.propTypes = {
  attributes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    onclick: PropTypes.func
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}