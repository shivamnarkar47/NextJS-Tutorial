import Link from 'next/link';
import aboutStyles from '../styles/About.module.css';
const HomeContainer = () => {
  return (
    <div className={aboutStyles.container}>
      <h1 className={aboutStyles.heading}>About Me</h1>
    </div>
  );
};
export default HomeContainer;
