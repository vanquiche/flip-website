import Image from 'next/image';
import React from 'react';
import style from '../styles/Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={style.container}>
      <span className={style.imgWrapper}>
        <Image src={require('../public/images/clover.png')} alt='clover logo' />
      </span>
      <small className={style.footerText}>&#169; HAPPY CLOVER STUDIO {year}</small>
    </footer>
  );
};

export default Footer;
