import React, { useState } from 'react';
import DataCards from 'renderer/components/DataCardsSection';
import { Link } from 'react-router-dom';
import arrowIcon from '../../../images/arrow-icon.png';
import screenShot1 from '../../../images/data/screenShot1.png';
import screenShot2 from '../../../images/data/screenShot2.png';
import screenShot3 from '../../../images/data/screenShot3.png';
import screenShot4 from '../../../images/data/screenShot4.png';
import screenShot5 from '../../../images/data/screenShot5.png';
import ScreenShot from 'renderer/components/ScreenShot';
import classes from './styles.module.css';
import { margin } from '@mui/system';
import { ClassNames } from '@emotion/react';

type Props = {};
var images: Array<Array<string>> = [[screenShot3], [screenShot2,screenShot4], [screenShot1,screenShot5]];

export default function DataPage({}: Props) {
  let [clicked, setClicked] = useState(false);

  let [results, setresults] = useState(Array<JSX.Element>);
  function ShowPopUp(i: number) {
    let tempresults:Array<JSX.Element> = [];
    images[i].forEach((element, index) => {
      tempresults.push(<ScreenShot   key={index} image={element} />);
    });
   
    setresults(tempresults );
    setClicked(true);
  
  }
  
  const handleClick = (event) => {
    if (event.target !== event.currentTarget) {
      // Click originated from a child element
      return;
    }

    // Click originated from the parent div
    setClicked(false);
  };

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.subTitles}>
            <h1 className={classes.heroHeader}>
              Saudi Intelligence <br />
              Data Repository
            </h1>
          </div>
        </div>
        <div className={classes.description}>
          <h1 className={classes.sectionHeader}>Data Reposositories</h1>
          <p className={classes.descriptionText}>
            Saudi Expert training modules are designed to help you learn what
            you need to know about Saudi as quickly and efficiently as possible
            so that you can develop the right products to meet your customers’
            needs for uniquely memorable experiences.
          </p>
        </div>
        <DataCards showPopup={ShowPopUp} />
        
        <Link className={classes.link} to="/">
          <span>BACK</span>
          <img src={arrowIcon} alt="" />
        </Link>
        {clicked && (
          <div
            className={classes.overlay}
             onClick={handleClick}
          >

            <div className={classes.holder}>

            {results}
            </div>
          </div>
        )}
    
          
      </main>
    </div>
  );
}
