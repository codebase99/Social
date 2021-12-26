import logo from './logo.svg';
import './App.css';
import VideoCard from './VideoCard'

function App() {
  //BEM naming convention
  return (
    <div className="App">
      <div className="app__top">
        {/* image at top logo */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
        alt="instagram logo" 
        className="app__logo"/>
        {/* reels text */}
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {/* container of app__videos(scrollable container) */}
        <VideoCard/>

      </div>

      
    </div>
  );
}

export default App;
