import React from 'react';
import classNames from 'classnames';
import './InputText.css';

export default function InputText(props) {
  const {
    className,
    attributes = {},
  } = props;

  const divClassName = classNames('c-input');
  const inputClassName = classNames('c-input--input', className);

  return (
    <div className={divClassName}>
      <input className={inputClassName} {...attributes} />
    </div>
  )
}