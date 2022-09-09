import React from 'react';
import style from '../styles/SplashScreen.module.scss';
import Layout from './Layout';

const SplashScreen = () => {
  return (
    <Layout color='#499feb' title='home'>
      <div className={style.textWrapper}>
        <h1 className={style.title}>FLIP</h1>
        <p className={style.subTitle}>The flashcard app</p>
        <p className={style.text}>that can help you remember anything!</p>
      </div>
    </Layout>
  );
};

export default SplashScreen;
