import Link from 'next/link';
import aboutStyles from '../styles/About.module.css';


const HomeContainer = () => {
  return (
    <div className={aboutStyles.container}>
      <h1 className={aboutStyles.heading}>About Me</h1>
      <div className={aboutStyles.images}>
      <div className={aboutStyles.content}>
      <p className={aboutStyles.para}>Hello ! Myself Shivam Narkar, pursuing a Diploma in IT at Vidyalankar Polytechnic, Wadala. Being living in Mumbai since from birth, I have been exploring various things. I am Front-End Developer for around year with clean skills.  </p>
      <br/>
      <div className={aboutStyles.link}>
      <Link href="/about"><button className={aboutStyles.button}>Know more</button></Link> 
      <span className="material-icons">
chevron_right
</span>     
</div>
      </div>
      <div className={aboutStyles.image}>
        
      </div>
</div>
    </div>
  );
};
export default HomeContainer;
