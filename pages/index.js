import Head from 'next/head';
import Nav from '../components/Nav';
import HomeContainer from '../components/HomeContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS Tutorial</title>
        <meta keywords="Coding Programming" />
      </Head>
      <Nav />
      <HomeContainer/>
    </div>
  );
}
