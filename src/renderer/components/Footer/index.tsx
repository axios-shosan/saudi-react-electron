import React ,{useState} from 'react';
import classes from './styles.module.css';

export default function index() {


  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1 className={classes.footerHeader}>Get Started</h1>
          <p className={classes.footerPara}>
            Stay in touch for updates and new modules offered <br />
            on Saudi Experts . And please reach out and tell us <br />
            what you'd like to see here.
          </p>
        </div>
        <div className={classes.form}>
          <h2 className={classes.formHeader}>Your Email</h2>
          <div className={classes.inputs}>
            <input type="text" className={classes.input} onChange={()=>{console.log("awdwd")}} />
            <button className={classes.registerBtn}>Register now</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
