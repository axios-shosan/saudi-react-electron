import React from 'react';
import Footer from 'renderer/components/Footer';
import DataCards from 'renderer/components/DataCardsSection';
import { Link } from 'react-router-dom';
import arrowIcon from '../../../images/arrow-icon.png';
import classes from './styles.module.css';

type Props = {};

export default function DataPage({}: Props) {
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
          <h1>Data Reposositories</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate mollitia neque expedita qui optio fugit soluta provident
            quaerat fuga pariatur eos amet distinctio similique quas corporis,
            voluptatem laudantium eveniet autem cum ratione accusamus alias?
            Dolore, accusamus fugit eos dolorum inventore tempore itaque
            deserunt fuga accusantium quod adipisci esse necessitatibus magnam
          </p>
        </div>
        <DataCards />
        <Link className={classes.link} to="/">
          <span>BACK</span>
          <img src={arrowIcon} alt="" />
        </Link>
      </main>
      <Footer />;
    </div>
  );
}
