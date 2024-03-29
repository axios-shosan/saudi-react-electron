/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import classes from './styles.module.css';

type Props = {
  link: string;
};

export default function IframePage({ link }: Props) {
  console.log( link )
  return (
    <div className={classes.container}>
      {/* <iframe  className={classes.frame} src={link} ></iframe> */}
      <webview className={classes.frame} src={link} ></webview>



    </div>
  );
}
