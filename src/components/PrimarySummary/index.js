import React from 'react';
import Icon from '../Icon';
import './PrimarySummary.css';

export default function PrimarySummary({ contentContext, agents }) {
  const buildingCount = agents.filter((item) => item.status === "building").length;
  const idleCount = agents.filter((item) => item.status === "idle").length;
  const allCount = agents.length;
  const physicalCount = agents.filter((item) => item.type === "physical").length;
  const virtualCount = agents.filter((item) => item.type === "virtual").length;

  return (
    <div className="summary-container">
      <div className="summary-item summary-building">
        <span>{contentContext.building}</span>
        <Icon name="icon-cog" className="summary-icon" />
        <span>{buildingCount}</span>
      </div>
      <div className="summary-item summary-idle">
        <span>{contentContext.idle}</span>
        <Icon name="icon-coffee" className="summary-icon" />
        <span>{idleCount}</span>
      </div>
      <div className="summary-item summary-subSummary">
        <div className="all">
          <span>{contentContext.all}</span>
          <span>{allCount}</span>
        </div>
        <div className="physical">
          <span>{contentContext.physical}</span>
          <span>{physicalCount}</span>
        </div>
        <div className="virtual">
          <span>{contentContext.virtual}</span>
          <span>{virtualCount}</span>
        </div>
      </div>
    </div>
  )
}