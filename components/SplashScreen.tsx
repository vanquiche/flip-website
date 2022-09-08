import React from 'react';
import style from '../styles/SplashScreen.module.scss';
import Layout from './Layout';

const SplashScreen = () => {
  return (
    <Layout color='#499feb' title='home'>
      <div className={style.textWrapper}>
        <h1 className={style.title}>FLIP</h1>
        {/* <h2 className={style.subTitle}>FLASHCARD APP</h2> */}
      </div>
    </Layout>
  );
};

export default SplashScreen;
