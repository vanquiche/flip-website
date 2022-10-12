import React from 'react';
import InfoCard from './InfoCard';
import Layout from './Layout';
import style from '../styles/Features.module.scss';
import { IoStatsChart, IoDiamond } from 'react-icons/io5';
import { MdFolderSpecial } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { MdDashboardCustomize } from 'react-icons/md';

const features = [
  {
    title: 'level system',
    content: 'track and measure the progress of all your subjects',
    img: <IoStatsChart size={50} />,
  },
  {
    title: 'customize',
    content: 'personalize your cards with different colors and patterns',
    img: <MdDashboardCustomize size={50} />,
  },
  {
    title: 'organize',
    content: 'create sets within categories to organize your pursuits',
    img: <MdFolderSpecial size={50} />,
  },
  {
    title: 'shop',
    content: 'purchase colors, patterns, and themes with coins you earn',
    img: <AiFillShopping size={50} />,
  },
  {
    title: 'free updates',
    content: 'enjoy more in the future with free content updates',
    img: <IoDiamond size={50} />,
  },
];

const Features = () => {
  return (
    <Layout title='Features' color='#4a4e69'>
      <div className={style.container}>
        {features.map((f, i) => (
          <InfoCard key={i} title={f.title} content={f.content} img={f.img} />
        ))}
      </div>
    </Layout>
  );
};

export default Features;
