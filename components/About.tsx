import React from 'react';
import Layout from './Layout';
import style from '../styles/About.module.scss';
import InfoCard from './InfoCard';
import SocialLinks from './SocialLinks';

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
            <InfoCard
              title={'steve'}
              content='WHEN NOT PROGRAMMING, HE LIKES TO WATCH MOVIES, PLAY CHESS, AND WRANGLE WILD KITTIES'
              img={require('../public/images/laptop.png')}
              alt='laptop icon'
            />
          </div>
          {/* item 2 */}
          <div className={style.item}>
            <InfoCard
              title={`michelle`}
              content="WHEN NOT DESIGNING, SHE LIKES TO WRITE CHILDREN'S BOOKS AND DRAW CUTE ILLUSTRATIONS OF CATS"
              img={require('../public/images/cat.png')}
              alt='cat icon'
            />
          </div>
        </div>
        <SocialLinks />
      </div>
    </Layout>
  );
};

export default About;
