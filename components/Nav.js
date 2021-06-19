import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
const Nav = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
        <div className={navStyles.logo}>SN</div>
        <ul>
          <li>
            <Link className={navStyles.navlink} href="/">Home</Link>
          </li>

          <li>
            <Link className={navStyles.navlink} href="/about">About</Link>
          </li>

          <li>
            <Link className={navStyles.navlink} href="/project">Projects</Link>
          </li>

          <li>
            <Link className={navStyles.navlink} href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/resume">
          <button className={navStyles.button}>Download Resume</button>
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
