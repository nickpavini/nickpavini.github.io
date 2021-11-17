import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Hamburger from 'hamburger-react'
import React, { useState } from "react";
import './NavMenu.css';

function NavMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fade>
      <div className="nav_menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {/*isOpen ? "true" : "false"*/}
          <div className={"nav_menu_items display_" + isOpen}>
            <a className="resume_button" href={process.env.PUBLIC_URL + '/NicholasPaviniResume.pdf'}>Resume</a>
            <div className="nav_link">
                <Link to='experience' spy={false} smooth={true} duration={500}>Experience</Link>
            </div>
            <div className="nav_link">
                <Link to='projects' spy={false} smooth={true} duration={500}>Projects</Link>
            </div>
            <div className="nav_link">
                <Link to='about' spy={false} smooth={true} duration={500}>About</Link>
            </div>
          </div>
      </div>
    </Fade>
  );
}

export default NavMenu;