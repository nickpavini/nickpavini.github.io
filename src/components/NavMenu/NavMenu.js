import { Link } from 'react-scroll'
import './NavMenu.css';

function NavMenu() {
  return (
    <div className="nav_menu">
        <a className="resume_button" href={process.env.PUBLIC_URL + '/NicholasPaviniResume.pdf'}>Resume</a>
        <div className="nav_link">
            <Link to='experience' spy={true} smooth={true} duration={500}>Experience</Link>
        </div>
        <div className="nav_link">
            <Link to='projects' spy={true} smooth={true} duration={500}>Projects</Link>
        </div>
        <div className="nav_link">
            <Link to='about' spy={true} smooth={true} duration={500}>About</Link>
        </div>
    </div>
  );
}

export default NavMenu;