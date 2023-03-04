import React from 'react';
import classes from './styles.module.css';
import DataCard from '../DataCard';
import compassImage from '../../../images/data/compass.png';
import campaignImage from '../../../images/data/campaign.png';
import visitorImage from '../../../images/data/visitor.png';
import seasonImage from '../../../images/data/season.png';
import cruiseImage from '../../../images/data/cruise.png';
import strategyImage from '../../../images/data/strategy.png';

type Props = {};

export default function DataCards({}: Props) {
  return (
    <div className={classes.container}>
      <DataCard
        image={compassImage}
        title={'Compass'}
        text={'Its all about Visits, Spend and NPS'}
      />
      <DataCard
        image={campaignImage}
        title={'Campaign Tracker'}
        text={'Greater Marketing impact'}
      />
      <DataCard
        image={visitorImage}
        title={'Visitor Experience'}
        text={'Fixing the basics and delighting visitors'}
      />
      <DataCard
        image={seasonImage}
        title={'Season Programs'}
        text={'Winning Summer & Winter Seasons'}
      />
      <DataCard
        image={cruiseImage}
        title={'Cruise'}
        text={'Cruise performance insights'}
      />
      <DataCard
        image={strategyImage}
        title={'Strategy Execution '}
        text={'Progress on STA annual business goals '}
      />
    </div>
  );
}
