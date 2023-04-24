import WhatSection from 'renderer/components/WhatSection';
import React from 'react';
import classes from './styles.module.css';
import EssentielsIcon from '../../../images/home/Essentials.png';
import BuildingIcon from '../../../images/home/building-icon.png';
import DiamondIcon from '../../../images/home/diamond.png';
import logo from '../../../images/home/Logo.png';
type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <main className={classes.main}>
        <div className={classes.hero}>
          <img src={logo} alt="" className={classes.logo} />
          <div className={classes.subTitles}>
            <h1 className={classes.heroHeader}>Saudi Expert</h1>
            <p className={classes.heroPara}>
              The official platform for domestic, regional and international
              tourism partners.
            </p>
          </div>
        </div>
        <div className={classes.whySection}>
          <h1 className={classes.whyTitle}>Why join Saudi Expert ?</h1>
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
              <img
                src={BuildingIcon}
                alt="Icon"
                className={classes.reasonIcon}
              />
              <p>
                Get more exposure for your
                <br />
                business
              </p>
            </div>
            <div className={classes.reason}>
              <img
                className={classes.reasonIcon}
                src={DiamondIcon}
                alt="Icon"
              />
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
    </div>
  );
}
