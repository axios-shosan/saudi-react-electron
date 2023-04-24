import React , { useState }from 'react';
import classes from './styles.module.css';

type Props = {
  image: string;
  title: string;
  text: string;
  showPopup:Function;
  i:number;
};

export default function DataCard({i,showPopup, image, title, text }: Props) {
 
  return (
    <div className={classes.cardContainer } onClick={()=>{showPopup(i);}} >
      <img className={classes.cardImage} src={image} alt="" />
      <div className={classes.textSection}>
        <h3 className={classes.header}>{title}</h3>
       
      </div>
    </div>
  );
}
