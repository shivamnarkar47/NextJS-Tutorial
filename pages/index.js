import Head from 'next/head';
import Nav from '../components/Nav';
import HomeContainer from '../components/HomeContainer';
import AboutContainer from '../components/AboutContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivam Narkar</title>
        <meta keywords="Coding Programming" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
      rel="stylesheet"/>
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2290%22>😉</text></svg>" />
      </Head>
      <Nav />
      <HomeContainer/>
      <AboutContainer/>

    </div>
  );
}
