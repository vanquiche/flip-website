import React from 'react';
import style from '../styles/SocialLinks.module.scss';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaEtsy } from 'react-icons/fa';

const social = [
  {
    name: 'GitHub',
    link: 'https://github.com/vanquiche',
    icon: <BsGithub size={40} />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/flipflashcard',
    icon: <BsTwitter size={40} />,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/flipflashcardapp',
    icon: <AiFillInstagram size={45} />,
  },
  {
    name: 'TikTok',
    link: 'https://tiktok.com/@flipflashcardapp',
    icon: <FaTiktok size={40} />,
  },
  {
    name: 'Etsy',
    link: 'https://etsy.com/shop/heartcoinshop',
    icon: <FaEtsy size={40} />,
  },
];

const SocialLinks = () => {
  return (
    <>
      <p className={style.title}>CONNECT WITH US</p>
      <div className={style.container}>
        {social.map((s) => {
          return (
            <a href={s.link} key={s.name} aria-label={`navigate to ${s.name}`}>
              {s.icon}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SocialLinks;
