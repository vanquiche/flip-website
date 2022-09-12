import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Download from '../components/Download';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import NavBar from '../components/NavBar';
import SplashScreen from '../components/SplashScreen';
import About from '../components/About';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
// contexts
import LocationContext from '../context/LocationContext';

const links = [
  {
    name: 'home',
    path: '#home',
    icon: require('../public/images/shimmer.png'),
    alt: 'home icon',
  },
  {
    name: 'features',
    path: '#features',
    icon: require('../public/images/shimmer.png'),
    alt: 'features icon',
  },
  {
    name: 'gallery',
    path: '#gallery',
    icon: require('../public/images/gallery.png'),
    alt: 'gallery icon',
  },
  {
    name: 'download',
    path: '#download',
    icon: require('../public/images/download.png'),
    alt: 'download icon',
  },
  {
    name: 'about',
    path: '#about-the-devs',
    icon: require('../public/images/clover.png'),
    alt: 'clover icon',
  },
];

const Home: NextPage = () => {
  const [location, setLocation] = useState<string>('home');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <div>
        <Head>
          <title>Flip Flashcard App</title>
          <meta
            name='description'
            content='The best flashcard app to help you study and remember anything! Available on the iOS app store now.'
            key='desc'
          />
          <meta property='og:title' content='Flip Flaschard App' />
          <meta property='og:image' content='https://flipflashcard.com/adaptive-icon.png' />
          <meta
            property='og:description'
            content='The best flashcard app to help you study and remember anything! Available on the iOS app store now.'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <NavBar links={links} />
        <SideNav links={links} />
        <main>
          <SplashScreen />
          <Features />
          <Gallery />
          <Download />
          <About />
          <Footer />
        </main>
      </div>
    </LocationContext.Provider>
  );
};

export default Home;
