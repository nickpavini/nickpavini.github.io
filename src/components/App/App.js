import NavMenu from '../NavMenu/NavMenu';
import MediaIcons from '../MediaIcons/MediaIcons';
import Intro from '../Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <MediaIcons/>
      <Intro/>
    </div>
  );
}

export default App;
