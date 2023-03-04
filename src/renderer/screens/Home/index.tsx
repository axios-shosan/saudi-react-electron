import React from 'react';
import Footer from 'renderer/components/Footer';
import classes from './styles.module.css';
import EssentielsIcon from '../../../images/home/Essentials.png';
import BuildingIcon from '../../../images/home/building-icon.png';
import DiamondIcon from '../../../images/home/diamond.png';
import WhatSection from 'renderer/components/WhatSection';

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.subTitles}>
            <h1 className={classes.heroHeader}>Saudi Expert</h1>
            <p className={classes.heroPara}>
              The official platform for domestic, regional and international
              tourism partners.
            </p>
          </div>
        </div>
        <div className={classes.whySection}>
          <h1>Why join Saudi Expert</h1>
          <div className={classes.reasons}>
            <div className={classes.reason}>
              <img
                className={classes.reasonIcon}
                src={EssentielsIcon}
                alt="Icon"
              />

              <p>
                Get more exposure for your
                <br />
                business
              </p>
            </div>
            <div className={classes.reason}>
              <img src={BuildingIcon} alt="Icon" width={'45px'} />
              <p>
                Get more exposure for your
                <br />
                business
              </p>
            </div>
            <div className={classes.reason}>
              <img src={DiamondIcon} alt="Icon" />
              <p>
                Get more exposure for your
                <br />
                business
              </p>
            </div>
          </div>
        </div>
        <WhatSection />
      </main>
      <Footer></Footer>
    </div>
  );
}
