import Head from 'next/head';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS Tutorial</title>
        <meta keywords="Coding Programming" />
      </Head>
      <Nav />
      <h1>Shivam Narkar</h1>
    </div>
  );
}
