import React from 'react';
import classes from './styles.module.css';
import grandImage from '../../../images/portals/guidelines-1.png';
import partnerImage from '../../../images/portals/guidelines-2.png';
import merchandiseImage from '../../../images/portals/Merchandise.png';
import photographyImage from '../../../images/portals/guidelines-4.png';
import GuidelineCard from '../GuidelineCard';

type Props = {};

export default function GuidelinesSection({}: Props) {
  return (
    <div className={classes.container}>
      <GuidelineCard image={grandImage} title="Brand Guidelines" />
      <GuidelineCard image={partnerImage} title="Partner Guidelines" />
      <GuidelineCard image={merchandiseImage} title="Merchandise Guidelines" />
      <GuidelineCard image={photographyImage} title="Photography Guidelines" />
    </div>
  );
}
