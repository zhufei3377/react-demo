import React from 'react';
import PrimaryNav from '../PrimaryNav';
import PrimaryHistory from '../PrimaryHistory';
import PrimarySummary from '../PrimarySummary';
import PrimaryFilter from '../PrimaryFilter';
import PrimaryAgents from '../PrimaryAgents';
import './PrimaryAction.css';

export default function PrimaryAction(props) {
  const {
    contentContext,
    agents
  } = props;

  const primaryNavProps = {
    navItem: contentContext.navItem
  };
  const primaryHistoryProps = {
    contentContext
  };
  const primarySummaryProps = {
    contentContext,
    agents
  };
  const primaryFilterProps = {
    contentContext
  };
  const primaryAgentsProps = {
    ...props
  };

  return (
    <div className="c-primary-action">
      <div className="c-primary-action__nav">
        <PrimaryNav {...primaryNavProps} />
        <PrimaryHistory {...primaryHistoryProps} />
      </div>
      <div className="c-primary-action__content">
        <PrimarySummary {...primarySummaryProps} />
        <PrimaryFilter {...primaryFilterProps} />
        <PrimaryAgents {...primaryAgentsProps} />
      </div>
    </div>
  )
}