import React from 'react';
import InfoCard from './InfoCard';
import Layout from './Layout';
import style from '../styles/Features.module.scss';

const features = [
  {
    title: 'leveling system',
    content: 'track your status with xp in all your categories!',
    img: require('../public/images/chart.png'),
    alt: 'chart icon'
  },
  {
    title: 'customize cards',
    content: 'lots of colors & designs to choose from!',
    img: require('../public/images/squares.png'),
    alt: 'cards icon'
  },
  {
    title: 'organize',
    content: 'create sets within categories to organize your pursuits!',
    img: require('../public/images/folders.png'),
    alt: 'folders icon'
  },
  {
    title: 'shop',
    content:
      'purchase new customizables with in-game currency. no microtransactions!',
    img: require('../public/images/shopping.png'),
    alt: 'shopping bag icon'
  },
  {
    title: 'free updates',
    content: 'all updates and new content will be free forever!',
    img: require('../public/images/diamond.png'),
    alt: 'diamond icon'
  },
];

const Features = () => {
  return (
    <Layout title='Features' color='#f27059'>
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
