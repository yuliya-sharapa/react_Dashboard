import React from 'react';
import StatisticsCard from './StatisticsCard';

export default function GeneralStatistics() {
  return (
    <div>
        <div className='row'>
          <StatisticsCard tipo="product" />
          <StatisticsCard tipo="category" />
          <StatisticsCard tipo="user" />
        </div>
    </div>
  )
}

/*
<StatisticsCard cards={[
            {
              blcolor:"primary",
              title:'Products in Data Base',
              number: users.count,
              icon:"clipboard-list"
            },
            {
              blcolor:'success',
              title:'Amount in products',
              number:546.456,
              icon:"dollar-sign"
            },
            {
              blcolor:'warning',
              title:'Users quantity',
              number:38,
              icon:"user-check"
            }

          ]}/>
*/