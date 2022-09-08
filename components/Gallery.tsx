import React from 'react';
import Layout from './Layout';
import style from '../styles/Gallery.module.scss';
import InfoCard from './InfoCard';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const features: { title: string; content: string; img?: any; alt?: string }[] =
  [
    {
      title: 'cards',
      content: 'flip, edit, and quiz your cards with one touch',
      img: require('../public/images/IMG_0560.jpg'),
      alt: 'cards screenshot',
    },
    {
      title: 'level & xp',
      content: 'stay motivated as you improve & level up',
      img: require('../public/images/IMG_0543.jpg'),
      alt: 'levels screenshot',
    },
    {
      title: 'shop',
      content: 'new colors & themes to keep things fresh',
      img: require('../public/images/IMG_0576.jpg'),
      alt: 'shop screenshot',
    },
    {
      title: 'stats',
      content: 'track average score and completed sets',
      img: require('../public/images/IMG_0540.jpg'),
      alt: 'stats screenshot',
    },
  ];

const Gallery = () => {
  return (
    <Layout title='gallery' color='#43bccd'>
      <div className={style.container}>
        {features.map((f, i) => (
          <div className={style.infoContainer} key={i}>
            <Zoom>
              <span className={style.image}>
                <Image
                  src={f.img}
                  style={{ borderRadius: '20px' }}
                  alt={f.alt}
                />
              </span>
            </Zoom>
            <InfoCard title={f.title} content={f.content} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
