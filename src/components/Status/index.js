import React from 'react';
import classNames from 'classnames';
import './Status.css';

export default function Status({ className, status }) {
  const combinedClassName = classNames("c-status", className);
  
  return (
    <span className={combinedClassName} status={status}>
      {status}
    </span>
  )
}