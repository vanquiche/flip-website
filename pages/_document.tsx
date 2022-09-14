import { Html, Head, Main, NextScript } from 'next/document';
import loader from '../components/loader';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Baloo+2:regular,500,600,700,800&display=swap'
          rel='stylesheet'
        />
        <style>{loader}</style>
      </Head>
      <body>
        <div id={'globalLoader'}>
          <div className='loader'>
            <div />
            <div />
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
