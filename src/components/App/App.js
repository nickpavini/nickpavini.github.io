import NavMenu from '../NavMenu/NavMenu';
import MediaIcons from '../MediaIcons/MediaIcons';
import Intro from '../Intro/Intro';
import Experience from '../Experience/Experience';
import ReactBreakpoints from 'react-breakpoints'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// setup breakpoints for some default modes from the npm page
const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

function App() {
  return (
    <div className="App">
      <ReactBreakpoints breakpoints={breakpoints}>
        <NavMenu/>
        <MediaIcons/>
        <Intro/>
        <Experience/>
      </ReactBreakpoints>
    </div>
  );
}

export default App;
