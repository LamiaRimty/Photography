import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import Parallax from "./components/Parallax/Parallax";
 import Header from "./components/Header/Header";
import Cover from "./components/Cover/Cover";
import Home from "./components/Home/Home";
import './App.css';
function App() {
  return (
    <div className="App">
       <Header/> 
      <Cover/> 
    
    
     {/* <Parallax/>


    {/* <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
   
    <ParallaxLayer offset={0} speed={0.25}>
        <div className='animation-layer parallax' id='sunrise'></div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.3}>
        <div className='animation-layer parallax' id='hill1'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1}>
        <div className='animation-layer parallax' id='hill2'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.3}>
        <div className='animation-layer parallax' id='foto-logo'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div className='animation-layer parallax' id='hill3'></div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={-0.001}>
        <div className='animation-layer parallax' id='hill4'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.001}>
        <div className='animation-layer parallax' id='hill5'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.45}>
        <div className='animation-layer parallax' id='leaf'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.03}>
        <div className='animation-layer parallax' id='plant'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.03}>
        <div className='animation-layer parallax' id='tree'></div>
      </ParallaxLayer>





    </Parallax>  */}


     <Home/>
    </div>
  );
}

export default App;