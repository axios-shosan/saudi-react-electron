import React from 'react';
import FieldCard from '../FieldCard';
import Elearning from '../../../images/home/e-learning.png';
import marketplce from '../../../images/home/marketplace.png';
import sidr from '../../../images/home/sidr.png';
import stoch from '../../../images/home/stoch.png';
import portal from '../../../images/home/portal.png';
import business from '../../../images/home/business.jpg';
import classes from './styles.module.css';
import WideFieldCard from '../WideFieldCard';

export default function WhatSection() {
  return (
    <>
      <div className={classes.container}>
       
        <FieldCard
          image={stoch}
          title="STOCH"
          text="Download and upload content. With thousands of high-quality images and videos available for free, the Saudi Tourism Content Hub (STOCH) allows you to always show Saudi in the best light."
          link="/iframe/stoch"
        />
        <FieldCard
          image={Elearning}
          title="E-Learning"
          text="Become a qualified Saudi Expert by learning every aspect of Saudi Arabia. Get better geographic awareness, brush up on your cultural knowledge, or learn something completely new."
          link="/iframe/e-learning"
        />
        <FieldCard
          image={sidr}
          title="SIDR"
          text="Big data platform that acts as KSA’s centralized data and insight hub for Tourism, hosts a large number of data sources that help in developing use cases and dashboards to enable data driven
decision making.."
          link="/data"
        />
        <FieldCard
          image={business}
          title="Business Directory"
          text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
          link="/iframe/business"
        />
        <FieldCard
          image={portal}
          title="Brand Portal"
          text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
          link="/portal"
        />
         <FieldCard
       
       image={marketplce}
       title="Marketplace"
       text="Get exposure to millions of visitors. Benefit from a wider audience base by uploading experiences to the marketplace "
       link="/iframe/marketplace"
     />
      </div>
    
    </>
  );
}
