import Image from 'next/image';
import React from 'react';
import Layout from './Layout';
import style from '../styles/Download.module.scss';

const Download = () => {
  return (
    <Layout title='download' color='#4a5759'>
      <div className={style.container}>
        <p className={style.text}>
          AVAILABLE ON iOS. <br />FREE TO {' '}
          <a
            href='https://apps.apple.com/us/app/flip-flashcard/id1637560175?l=en'
            target='_blank'
            rel='noreferrer'
            aria-label='open new window to app store'
            style={{ color: '#499feb' }}
          >
            DOWNLOAD
          </a>{' '}
          NOW!
        </p>
        <div className={style.appStoreLogoContainer}>
          <Image
            src={require('../public/images/DownloadAppStore.png')}
            className={style.appStoreLogo}
            alt='app store logo'
            priority
          />
        </div>
      </div>
    </Layout>
  );
};

export default Download;
