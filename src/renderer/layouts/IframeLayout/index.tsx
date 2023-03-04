import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './styles.module.css';

import arrowIcon from '../../../images/arrow-icon.png';

type Props = {};

export default function IframeLayout({}: Props) {
  return (
    <div>
      <main className={classes.main}>
        <Outlet />
      </main>
      <Link className={classes.link} to="/">
        <span>BACK</span>
        <img src={arrowIcon} alt="" />
      </Link>
    </div>
  );
}
