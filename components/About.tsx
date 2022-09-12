import React from 'react';
import Layout from './Layout';
import style from '../styles/About.module.scss';
import InfoCard from './InfoCard';
import Image from 'next/image';
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
            {/* <span className={style.imgWrapper}>
              <Image
                src={require('../public/images/laptop.png')}
                alt='laptop icon'
                // priority
              />
            </span> */}
            <InfoCard
              title={'steve'}
              content="WHEN NOT PROGRAMMING, HE LIKES TO WATCH MOVIES AND WRANGLE WILD KITTIES"
              img={require('../public/images/laptop.png')}
            />
          </div>
          {/* item 2 */}
          <div className={style.item}>
            {/* <span className={style.imgWrapper}>
              <Image
                src={require('../public/images/cat.png')}
                alt='cat icon'

                // priority
              />
            </span> */}
            <InfoCard
              title={`michelle`}
              content="WHEN NOT DESIGNING, SHE LIKES TO WRITE CHILDREN'S BOOKS AND DRAWING CUTE CAT ILLUSTRATIONS"
              img={require('../public/images/cat.png')}
            />
          </div>
        </div>
        {/* <p className={style.subtitle}>IN COLLABORATION WITH</p>
        <span className={style.heartcoinLogo}>
          <a
            className={style.heartcoinText}
            href='https://etsy.com/shop/heartcoinshop'
            target='_blank'
            rel='noreferrer'
          >
            HEART COIN
          </a>
        </span> */}
        <SocialLinks />
      </div>
    </Layout>
  );
};

export default About;
