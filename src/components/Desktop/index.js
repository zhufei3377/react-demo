import React from 'react';
import Fragment from '../Fragment';
import Header from '../Header';
import Main from '../Main';
import PrimaryAction from '../PrimaryAction';
import Footer from '../Footer';
import './Desktop.css';

export default function Desktop(props) {
  const {
    contentContext,
    displayModalId,
    onClickCancelResource
  } = props;

  const headerProps = {
    contentContext
  };
  const footerProps = {
    copyright: contentContext.copyright
  };

  return (
    <Fragment>
      <Header {...headerProps} />
      <Main>
        <PrimaryAction {...props} />
      </Main>
      <Footer {...footerProps} />
      {displayModalId && <div className="popup" onClick={(e) => onClickCancelResource(e)}></div>}
    </Fragment>
  )
}