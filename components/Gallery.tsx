import React from 'react';
import Layout from './Layout';
import style from '../styles/Gallery.module.scss';
import InfoCard from './InfoCard';
import Image from 'next/image';

const features: { title: string; content: string; img?: any; alt?: string }[] =
  [
    {
      title: 'cards',
      content: 'flip, edit, and quiz your cards with one touch',
      img: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_600/v1664362605/flip-app/IMG_0560_tebr8t.jpg',
      alt: 'cards screenshot',
    },
    {
      title: 'level & xp',
      content: 'stay motivated as you improve & level up',
      img: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_600/v1664362605/flip-app/IMG_0543_tftsi8.jpg',
      alt: 'levels screenshot',
    },
    {
      title: 'shop',
      content: 'new colors & themes to keep things fresh',
      img: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_600/v1664362605/flip-app/IMG_0576_iql3wy.jpg',
      alt: 'shop screenshot',
    },
    {
      title: 'stats',
      content: 'track average score and completed sets',
      img: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_600/v1664362605/flip-app/IMG_0540_hl6wpn.jpg',
      alt: 'stats screenshot',
    },
  ];

const Gallery = () => {

  return (
    <Layout title='gallery' color='#43bccd'>
      <div className={style.container}>
        {features.map((f, i) => (
          <div className={style.infoContainer} key={i}>
            <span className={style.image}>
              <Image src={f.img} alt={f.alt} height={600} width={427} />
            </span>

            <InfoCard title={f.title} content={f.content} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
