import React from 'react';
import classes from './styles.module.css';

type Props = {
  image: string;
  title: string;
  text: string;
};

export default function DataCard({ image, title, text }: Props) {
  return (
    <div className={classes.cardContainer}>
      <img className={classes.cardImage} src={image} alt="" />
      <div className={classes.textSection}>
        <h3 className={classes.header}>{title}</h3>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
}
