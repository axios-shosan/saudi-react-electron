import React , { useState }from 'react';
import classes from './styles.module.css';

type Props = {
  image: string;
  
};

export default function ScreenShot({image}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const buttonClassNames = [classes.image,classes.expanded].join(' ');
 
  return (
    <div className="image-container">
      <img
        src={image}
        className={!isExpanded ? classes.image :buttonClassNames}
        onClick={toggleExpand}
      />
    </div>
  );
}
