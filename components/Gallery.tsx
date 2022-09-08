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
      content: 'filp between the q&a, and dive into the quiz',
      img: require('../public/images/IMG_0560.jpg'),
      alt: 'cards screenshot',
    },
    {
      title: 'level & xp',
      content: 'to keep you motivated to get better!',
      img: require('../public/images/IMG_0543.jpg'),
      alt: 'levels screenshot',
    },
    {
      title: 'shop',
      content: 'features new card colors, themes, & more',
      img: require('../public/images/IMG_0576.jpg'),
      alt: 'shop screenshot',
    },
    {
      title: 'stats',
      content: 'track your progress over time',
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
