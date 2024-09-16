import './App.css';
import NavBar from "./NavBar";
import banner from './Images/banner.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useRef } from 'react';
import goback from "./Images/circular_go_back_button.png"

function App() {
  const navRef = useRef(null); 
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(+1);
  };

  return (
    <div className="App">
      <img src={banner} alt='a banner that has farmers recycle logos and plants' id="banner" />
      <NavBar ref={navRef} /> 
      <button type='button' id='go-back-button' onClick={goBack}><img src={goback} alt='go back button'></img>Go Back</button>
      <Footer scrollRef={navRef} /> 
    </div>
  );
}

export default App;
