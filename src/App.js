import PhotoProfile from './images/photoProfile.jpg';
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="main--container">
        <img id='profile-photo' src={PhotoProfile} alt='profile' />
      <Main />
      <Footer />
      </div>
    </div>
  );
}

export default App;
