import React from 'react';
import FieldCard from '../FieldCard';
import Elearning from '../../../images/home/e-learning.png';
import marketplce from '../../../images/home/marketplace.png';
import sidr from '../../../images/home/sidr.png';
import stoch from '../../../images/home/stoch.png';
import classes from './styles.module.css';

export default function WhatSection() {
  return (
    <div className={classes.container}>
      <FieldCard
        image={Elearning}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/data"
      />
      <FieldCard
        image={stoch}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/portal"
      />{' '}
      <FieldCard
        image={marketplce}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/iframe/e-learning"
      />
      <FieldCard
        image={sidr}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/iframe/stoch"
      />
      <FieldCard
        image={Elearning}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/iframe/marketplace"
      />
      <FieldCard
        image={Elearning}
        title="Marketplace"
        text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
        link="/iframe/business"
      />
    </div>
  );
}
