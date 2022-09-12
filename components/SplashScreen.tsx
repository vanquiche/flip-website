import React from 'react';
import style from '../styles/SplashScreen.module.scss';
import Layout from './Layout';
import { useMediaQuery } from 'react-responsive';

const SplashScreen = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  return (
    <Layout color='#499feb' title='home'>
      <div className={style.textWrapper}>
        <h1 className={style.title}>FLIP</h1>
        {isMobile ? (
          <p className={style.subTitle}>FLASHCARD APP</p>
        ) : (
          <>
            <p className={style.subTitle}>THE FLASHCARD APP</p>
            <p className={style.text}>THAT CAN HELP YOU REMEMBER ANYTHING!</p>
          </>
        )}
      </div>
    </Layout>
  );
};

export default SplashScreen;
