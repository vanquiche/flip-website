import React from 'react';
import InfoCard from './InfoCard';
import Layout from './Layout';
import style from '../styles/Features.module.scss';

const features = [
  {
    title: 'level system',
    content: 'track and measure the progress of all your subjects',
    img: require('../public/images/chart.png'),
    alt: 'chart icon'
  },
  {
    title: 'customize',
    content: 'personalize your cards with different colors and patterns',
    img: require('../public/images/squares.png'),
    alt: 'cards icon'
  },
  {
    title: 'organize',
    content: 'create sets within categories to organize your pursuits',
    img: require('../public/images/folders.png'),
    alt: 'folders icon'
  },
  {
    title: 'shop',
    content:
      'purchase colors, patterns, and themes with coins you earn',
    img: require('../public/images/shopping.png'),
    alt: 'shopping bag icon'
  },
  {
    title: 'free updates',
    content: 'enjoy more in the future with free content updates',
    img: require('../public/images/diamond.png'),
    alt: 'diamond icon'
  },
];

const Features = () => {
  return (
    <Layout title='Features' color='#4a4e69'>
      <div className={style.container}>
        {features.map((f, i) => (
          <InfoCard
            key={i}
            title={f.title}
            content={f.content}
            img={f.img}
            alt={f.alt}
            color='black'
          />
        ))}
      </div>
    </Layout>
  );
};

export default Features;
