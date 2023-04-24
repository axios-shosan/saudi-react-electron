import React from 'react';
import classes from './styles.module.css';
import DataCard from '../DataCard';
import compassImage from '../../../images/data/Thumb1.jpeg';
import campaignImage from '../../../images/data/Thumb2.jpeg';
import visitorImage from '../../../images/data/Thumb3.jpeg';

type Props = {showPopup:Function};

export default function DataCards({showPopup}: Props) {
  return (
    <div className={classes.container}>
      <DataCard
      showPopup={showPopup}
        image={compassImage}
        title="APAC Market Performance"
        text="Its all about Visits, Spend and NPS"
        i={0}
      />
      <DataCard
      showPopup={showPopup}
        image={campaignImage}
        title="APAC Partner Enablement"
        text="Greater Marketing impact"
        i={1}
      />
      <DataCard
      showPopup={showPopup}
        image={visitorImage}
        title="India Partner Enablement"
        text="Fixing the basics and delighting visitors"
        i={2}
      />
    </div>
  );
}
