import React from 'react';
import { connect } from 'react-redux';
import Desktop from '../components/Desktop';
import { getAgents, setDisplayModalId, addAgent, setInputResources } from '../modules/agents';
import strings from '../content';
import { getSafe } from '../utilities';

function App(props) {
  const contentContext = strings.screen;
  const desktopProps = {
    contentContext,
    ...props
  };

  return (
    <Desktop {...desktopProps} />
  )
}

function mapStateToProps(state) {
  const agents = getSafe(() => state.agents.agents, []);
  const displayModalId = getSafe(() => state.agents.displayModalId);

  return {
    agents,
    displayModalId
  }
}

function mapDispatchToProps(dispatch) {
  dispatch(getAgents());

  return {
    onClickOpenModal: (e, id) => {
      e.preventDefault();
      dispatch(setDisplayModalId(id));
      dispatch(setInputResources(""));
    },
    onKeyUpAddResource: (e) => {
      e.preventDefault();
      const input = e.target.value.trim();
      dispatch(setInputResources(input));
    },
    onClickAddResource: (e, id) => {
      e.preventDefault();
      dispatch(addAgent(id));
      dispatch(setDisplayModalId(null));
    },
    onClickCancelResource: (e) => {
      e.preventDefault();
      dispatch(setDisplayModalId(null));
    },
    test: (e) => {
      console.log("e 888888 ", e);
      console.log("e.target 888888 ", e.target);
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      console.log("document.querySelector() --- ", document.querySelector("#inner"));
      if (e.target && e.target === document.querySelector("#inner")) {
        return;

      }
      // document.removeEventListener('click', aaa);
      // e.preventDefault();
      // dispatch(setDisplayModalId(null));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);