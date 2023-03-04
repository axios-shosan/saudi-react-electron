import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './styles.module.css';

type Props = {};

export default function BaseLayout({}: Props) {
  return (
    <div>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.text}>
            <h1 className={classes.footerHeader}>Get Started</h1>
            <p className={classes.footerPara}>
              Stay in touch for updates and new modules offered <br />
              on Saudi Experts . And please reach out and tell us <br />
              what you &apos d like to see here.
            </p>
          </div>
          <div className={classes.form}>
            <h2 className={classes.formHeader}>Your Email</h2>
            <div className={classes.inputs}>
              <input type="text" className={classes.input} />
              <button className={classes.registerBtn}>Register now</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
