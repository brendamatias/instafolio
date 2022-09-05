import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';
import { getPrismicClient } from '../services/prismic';
import { IExperience } from '../types';

interface HomeProps {
  experiences: IExperience[];
}

const Home = ({ experiences }: HomeProps) => (
  <>
    <Head>
      <title>Instafolio</title>
    </Head>

    <main>
      <HeaderTop />

      <div className="wrapper">
        <Header />
        <Content experiences={experiences} />
      </div>
    </main>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const response = await client.getAllByType('experience', {
    orderings: [
      {
        field: 'my.experience.started_in',
        direction: 'desc',
      },
    ],
  });

  const experiences = response.map(({ uid, data }) => ({
    slug: uid,
    job: data.job[0].text,
    company: data.company[0].text,
    description: data.description[0].text,
    started_in: data.started_in,
    finished_in: data.finished_in,
  }));

  return {
    props: {
      experiences,
    },
    revalidate: 86400,
  };
};

export default Home;
