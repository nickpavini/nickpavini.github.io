import NavMenu from '../NavMenu/NavMenu';
import MediaIcons from '../MediaIcons/MediaIcons';
import Intro from '../Intro/Intro';
import Experience from '../Experience/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <MediaIcons/>
      <Intro/>
      <Experience/>
    </div>
  );
}

export default App;
