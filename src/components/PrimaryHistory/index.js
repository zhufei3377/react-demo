import React from 'react';
import './PrimaryHistory.css';

export default function PrimaryHistory({ contentContext }) {

  return (
    <div className="history-container">
      <p>{contentContext.history}</p>
      <ul>
        {
          contentContext.historyList.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}