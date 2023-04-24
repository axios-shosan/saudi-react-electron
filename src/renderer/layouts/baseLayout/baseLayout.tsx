import React ,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import classes from './styles.module.css';
import fs from "fs";
type Props = {};

export default function BaseLayout({}: Props) {

  const [message, setMessage] = useState("");

 
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
          <div className={classes.formContainer}>
            <h2 className={classes.formHeader}>Your Email</h2>
            <div className={classes.form}>
              <input type="text" className={classes.input} value={message} onChange={(e)=>{setMessage(e.target.value)} }/>
              <button className={classes.registerBtn} onClick={()=>{SubmitEmail(message);setMessage("");}} >Register now</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SubmitEmail(email:string)
{
  window.electron.ipcRenderer.sendMessage('add-email',email);
}