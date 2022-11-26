import React from 'react';
import Icon from '../Icon';
import InputText from '../InputText';
import Button from '../Button';
import './PrimaryFilter.css';

export default function PrimaryFilter({ contentContext }) {

  const searchInputProps = {
    attributes: {
      id: "searchServer",
      name: "searchServer",
      type: "text",
      autoComplete: "off",
      // onKeyUp: (e) => onKeyUpSearch(e)
    },
    className: "c-input--search"
  };

  const searchBtnProps = {
    attributes: {
      id: "btnSearch",
      type: "button",
      // onKeyUp: (e) => onKeyUpSearch(e)
    },
    className: "c-button--search"

  };

  return (
    <div className="filter-container">
      <div className="filter-navbar">
        <span className="active">{contentContext.all2}</span>
        <span>{contentContext.physical2}</span>
        <span>{contentContext.virtual2}</span>
      </div>
      <div className="filter-search">
        <InputText {...searchInputProps} />
        <Button {...searchBtnProps}>
          <Icon name="icon-search" className="c-icon__search" />
        </Button>
      </div>
      <div className="filter-displayMode">
        <Icon name="icon-th-card" className="c-icon__card" />
        <Icon name="icon-th-list" className="c-icon__list" />
      </div>
    </div>
  )
}