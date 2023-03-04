import React from 'react';
import classes from './styles.module.css';

type Props = { image: string; title: string };

export default function GuidelineCard({ image, title }: Props) {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <h1 className={classes.cardHeader}>{title}</h1>
    </div>
  );
}
