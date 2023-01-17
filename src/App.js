import PhotoProfile from './images/photoProfile.jpg';
import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="main--container">
        <img id='profile-photo' src={PhotoProfile} alt='profile' />
      <Main />
      </div>
    </div>
  );
}

export default App;
