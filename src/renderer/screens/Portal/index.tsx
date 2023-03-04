import React from 'react';
import { Link } from 'react-router-dom';
import GuidelinesSection from 'renderer/components/Guidelines';
import arrowIcon from '../../../images/arrow-icon.png';
import classes from './styles.module.css';

type Props = {};

export default function PortalPage({}: Props) {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.subTitles}>
            <h1 className={classes.heroHeader}>Saudi Intelligence </h1>
            <p className={classes.heroText}>
              Your single source for every brand element related to Visit Saudi.{' '}
              Explore examples on
              <br />
              how to utilize the brand and all the do's and don'ts
            </p>
          </div>
        </div>
        <h1 className={classes.guidelinesHeader}>Guidelines</h1>
        <GuidelinesSection />
        <Link className={classes.link} to="/">
          <span>BACK</span>
          <img src={arrowIcon} alt="" />
        </Link>
      </main>
    </div>
  );
}
