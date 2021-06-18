import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';
const HomeContainer = () => {
  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.headingfont}>Hey , myself Shivam Narkar </h1>
      <hr width="500"/>
      <p>A web dev, UI designer and a confident Programmer</p>
      <br/>
      <br/>
      <div className={homeStyles.knowMore}>
      <Link href="/about"><button className={homeStyles.button}>Know more</button></Link> 
      <span className="material-icons">
chevron_right
</span>     
</div>
    </div>
  );
};
export default HomeContainer;
