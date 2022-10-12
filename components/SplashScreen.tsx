import React from 'react';
import style from '../styles/SplashScreen.module.scss';
import Layout from './Layout';

const SplashScreen = () => {

  return (
    <Layout color='#499feb' title='home'>
      <div className={style.textWrapper}>
        {/* {title.map((char, i) => (
          <span
            key={i}
            className={style.title}
            style={{ animationDelay: `${i * 1000}ms` }}
          >
            {char}
          </span>
        ))} */}
        <h1 className={style.title}>FLIP</h1>
      </div>
    </Layout>
  );
};

export default SplashScreen;
