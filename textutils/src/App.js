import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode,setMode] = useState('light'); //setting the light/dark mode default->light
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }

  return (
    <>
      <Navbar title={"TextUtils"} about="About" theme_mode={mode} toggleMode={toggleMode}></ Navbar>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" theme_mode={mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
