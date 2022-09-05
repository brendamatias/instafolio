import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Instafolio</title>
    </Head>

    <main>
      <HeaderTop />

      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </main>
  </>
);

export default Home;
