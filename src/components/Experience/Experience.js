import { Chrono } from "react-chrono";
import {experience, experieneTheme} from "../../data.js";
import Fade from 'react-reveal/Fade';
import { Media } from 'react-breakpoints'
import './Experience.css';

function ExperienceMobile() {
  return (
    <Chrono
      items={experience}
      theme={experieneTheme}
      mode="VERTICAL"
      scrollable={{ scrollbar: false }}
      cardHeight={150}
      hideControls
    />
  );
}

function ExperienceDesktop() {
  return (
    <Chrono
      items={experience}
      theme={experieneTheme}
      mode="VERTICAL_ALTERNATING"
      scrollable={{ scrollbar: true }}
      cardHeight={150}
      hideControls
    />
  );
}

function Experience() {
  return (
    <section id="experience">
      <div id="experience_container">
        <Fade>
          <h1>Experience</h1>
          <div id="experience_timeline">
            <Media>
              {
                ({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] <= breakpoints.tabletLandscape ? (
                    <ExperienceMobile />
                  ) : (
                    <ExperienceDesktop />
                  )
              }
            </Media>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;
