import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './styles.module.css';
import arrowIcon from '../../../images/arrow-icon.png';

type Props = {
  image: string;
  title: string;
  text: string;
  link: string;
};

export default function FieldCard({ image, title, text, link }: Props) {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classes.card}
      onClick={() => {
        navigate(link);
      }}
    >
      <img className={classes.image} src={image} alt="" />
      <div className={classes.informaion}>
        <div className={classes.textContainer}>
          <h2 className={classes.cardTitle}>{title}</h2>
        
          <p className={classes.cardText}>{text}</p>
        </div>
        <Link className={classes.link} to={link}>
          <span>Discover</span>
          <img src={arrowIcon} alt="next"/>
        </Link>
      </div>
    </div>
  );
}
