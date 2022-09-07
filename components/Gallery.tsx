import React from 'react';
import Layout from './Layout';
import style from '../styles/Gallery.module.scss';
import InfoCard from './InfoCard';
import Image from 'next/image';

const features: { title: string; content: string; img?: any }[] = [
  {
    title: 'cards',
    content: 'filp between the q&a, and dive into the quiz',
  },
  {
    title: 'level & xp',
    content: 'to keep you motivated to get better!',
  },
  {
    title: 'shop',
    content: 'features new card colors, themes, & more',
  },
  {
    title: 'stats',
    content: 'track your progress over time',
  },
];

const Gallery = () => {
  return (
    <Layout title='gallery' color='#43bccd'>
      <div className={style.container}>
        {features.map((f, i) => (
          <div className={style.infoContainer} key={i}>
            <img
              src='https://via.placeholder.com/325x575'
              className={style.image}
            />
            <InfoCard title={f.title} content={f.content} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
