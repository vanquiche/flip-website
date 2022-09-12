import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from '../styles/SocialLinks.module.scss';

const social = [
  {
    name: 'GitHub',
    link: 'https://github.com/vanquiche',
    icon: require('../public/images/icons8-github-48.png'),
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/flipflashcard',
    icon: require('../public/images/icons8-twitter-50.png'),
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/flipflashcardapp',
    icon: require('../public/images/icons8-instagram-50.png'),
  },
  {
    name: 'TikTok',
    link: 'https://tiktok.com/@flipflashcard',
    icon: require('../public/images/icons8-tiktok-50.png'),
  },
  {
    name: 'Etsy',
    link: 'https://etsy.com/shop/heartcoinshop',
    icon: require('../public/images/icons8-etsy-64.png'),
  },
];

const SocialLinks = () => {
  return (
    <>
      <p className={style.title}>CONNECT WITH US</p>
      <div className={style.container}>
        {social.map((s) => {
          return (
            <Link href={s.link} key={s.name}>
              <a>
                <Image
                  src={s.icon}
                  width='38px'
                  height='38px'
                  alt={s.name}
                  className={style.icon}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SocialLinks;
