import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './styles.module.css';
import arrowIcon from '../../../images/arrow-icon.png';
import mask from '../../../images/home/Mask.png';
import chinese from '../../../images/home/Chinese.png';
type Props = {
 
  title: string;

  link: string;
};

export default function WideFieldCard({  title,  link }: Props) {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classes.widecard}
      onClick={() => {
        navigate(link);
      }}
    >
      
        <div style={{ backgroundImage: "url("+chinese+")",display:"flex",justifyContent:"right", width: "500px", alignContent: "right"}}>
     
     <div style={{backgroundColor:"#00a8bb",width:"25px",WebkitMaskImage:"url("+mask+")",WebkitMaskPositionY:"center",WebkitMaskRepeat:"no-repeat",WebkitMaskSize:"100%"}}></div>
        </div>
      
      <div style={{width : "500px"}}>
        <div className={classes.information}>
         
            <h2 className={classes.cardTitle}>{title}</h2>

          
          <Link className={classes.link} to={link}>
            {/* <span>Discover</span>
            <img src={arrowIcon} alt="next" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
