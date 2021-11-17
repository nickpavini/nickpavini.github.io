import Fade from 'react-reveal/Fade';
import profile_pic from "../../assets/profile.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from 'react-scroll'
import './Intro.css';

function Intro() {
  return (
    <section id="intro">
        <Container id="intro_container">
            <Row className="intro_image">
                <Fade top>
                    <Image id="profile_pic" src={profile_pic} alt=""></Image>
                </Fade>
                <Fade left>
                    <h1 className="my_name">Nicholas Pavini</h1>
                </Fade>
                <Fade right>
                    <h3 className="my_role">Full Stack Software Engineer</h3>
                </Fade>
            </Row>
            <Row className="intro_next">
                <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <i className="arrow arrow_down"></i>
                  </Link>
            </Row>
        </Container>
    </section>
  );
}

export default Intro;
