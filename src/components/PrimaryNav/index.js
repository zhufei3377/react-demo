import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import './PrimaryNav.css';

export default function PrimaryNav({ navItem = [] }) {

  return (
    <div className="nav-container">
      {
        navItem.map((item, i) => {
          const combinedClassName = classNames("nav-item", { "nav-item-active": item.name === "AGENT" });
          return (
            <div key={i} className={combinedClassName}>
              <Icon name={item.iconName} className="nav-item-icon" /><span>{item.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}