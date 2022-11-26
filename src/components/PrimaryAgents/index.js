import React from 'react';
import Fragment from '../Fragment';
import PrimaryAgent from './PrimaryAgent';
import './PrimaryAgents.css';

export default function PrimaryAgents(props) {
  const {
    agents
  } = props;

  return (
    <Fragment>
      {agents &&
        agents.map((agent, i) => {
          const primaryAgentProps = {
            key: i,
            agent,
            ...props
          };

          return <PrimaryAgent {...primaryAgentProps} />
        })
      }
    </Fragment>
  )
}