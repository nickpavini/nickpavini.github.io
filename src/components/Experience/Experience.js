import { Chrono } from "react-chrono";
import {experience, experieneTheme} from "../../data.js";
import Fade from 'react-reveal/Fade';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <div id="experience_container">
        <Fade>
          <h1>Experience</h1>
          <div id="experience_timeline">
            <Chrono
              items={experience}
              theme={experieneTheme}
              mode="VERTICAL_ALTERNATING"
              scrollable={{ scrollbar: true }}
              cardHeight={150}
              hideControls
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;
