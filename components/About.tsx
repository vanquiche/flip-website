import React from 'react';
import Layout from './Layout';
import style from '../styles/About.module.scss';
import InfoCard from './InfoCard';
import Image from 'next/image';

const About = () => {
  return (
    <Layout title='About the Devs' color='#e07a5f'>
      <div className={style.container}>
        <p className={style.title}>HAPPY CLOVER STUDIO</p>
        <p className={style.subtitle}>TEAM MEMBERS</p>
        {/* container */}
        <div className={style.itemContainer}>
          {/* item 1 */}
          <div className={style.item}>
            <span className={style.imgWrapper}>
              <Image
                src={require('../public/images/laptop.png')}
                alt='laptop icon'
              />
            </span>
            <InfoCard
              title={'programmer | steve'}
              content="WHEN HE'S NOT PROGRAMMING, STEVE ENJOYS ART, MOVIES, AND HANGING OUT WITH KITTIES."
            />
          </div>
          {/* item 2 */}
          <div className={style.item}>
            <span className={style.imgWrapper}>
              <Image src={require('../public/images/cat.png')} alt='cat icon' />
            </span>
            <InfoCard
              title={`designer | michelle`}
              content="MICHELLE SPENDS HER DAYS WRITING CHILDREN'S BOOKS, DEVELOPING VIDEO GAMES, AND DRAWING CUTE CATS!"
            />
          </div>
        </div>
        <p className={style.subtitle}>IN COLLABORATION WITH</p>
        <span className={style.heartcoinLogo}>
          <p className={style.heartcoinText}>HEART COIN</p>
        </span>
      </div>
    </Layout>
  );
};

export default About;
