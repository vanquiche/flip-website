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
import {HiSparkles} from 'react-icons/hi';
import { BiImages } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import { GiClover } from 'react-icons/gi';


const links = [
  {
    name: 'features',
    path: '#features',
    icon: <HiSparkles size={46} />,
    alt: 'features icon',
  },
  {
    name: 'gallery',
    path: '#gallery',
    icon: <BiImages size={46} />,
    alt: 'gallery icon',
  },
  {
    name: 'download',
    path: '#download',
    icon: <FiDownload size={46} />,
    alt: 'download icon',
  },
  {
    name: 'about',
    path: '#about-the-devs',
    icon: <GiClover size={46} />,
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
          <meta property='og:title' content='Flip Flascard App' />
          <meta property='og:image' content='https://flipflashcard.com/metaImage.png' />
          <meta
            property='og:description'
            content='The best flashcard app to help you study and remember anything! Available on the iOS app store now.'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <NavBar links={links} />
        {/* <SideNav links={links} /> */}
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
