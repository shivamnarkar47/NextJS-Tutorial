import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';
const Nav = () => {
  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.headingfont}>Hey , myself Shivam Narkar </h1>
      <hr width="500"/>
      <p>A web dev, UI designer and a confident Programmer</p>
      
    </div>
  );
};
export default Nav;
