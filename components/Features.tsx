import React from 'react';
import InfoCard from './InfoCard';
import Layout from './Layout';
import style from '../styles/Features.module.scss';

const features = [
  {
    title: 'level system',
    content: 'track and measure the progress of all your subjects',
    img: 'stats',
  },
  {
    title: 'customize',
    content: 'personalize your cards with different colors and patterns',
    img: 'squares',
  },
  {
    title: 'organize',
    content: 'create sets within categories to organize your pursuits',
    img: 'folders',
  },
  {
    title: 'shop',
    content:
      'purchase colors, patterns, and themes with coins you earn',
    img: 'shop',
  },
  {
    title: 'free updates',
    content: 'enjoy more in the future with free content updates',
    img: 'diamond',
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
          />
        ))}
      </div>
    </Layout>
  );
};

export default Features;
