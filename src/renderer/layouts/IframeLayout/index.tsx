import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import classes from './styles.module.css';

import arrowIcon from '../../../images/arrow-icon.png';

type Props = {};

export default function IframeLayout({}: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <main className={classes.main}>
        <Outlet />
        <button
          className={classes.navLinkAx}
          onClick={() => {
            navigate('/');
          }}
        >
          <span>BACK</span>
          <img src={arrowIcon} alt="" />
        </button>
      </main>
    </div>
  );
}
