import React from 'react';
import classNames from 'classnames';
import { getSafe } from '../../utilities';
import iconStr from './icon.json';
import './Icon.css';

export default function Icon(props) {
  const { className, name } = props;
  const combinedClassName = classNames("c-icon", className);
  const iconUnicode = getSafe(() => iconStr[name], "e30c");

  return (
    <span className={combinedClassName}>
      <i className="c-icon__glyph" aria-hidden="true" role="presentation">
        {String.fromCharCode(parseInt(iconUnicode, 16))}
      </i>
    </span>
  )
}