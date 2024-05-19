import React, { useState } from 'react';
import Navbar from './Navbar';
import Worklist from './components/Worklist';
//import DeleteWork from './components/DeleteWork';
//import EditWork from './components/EditWork';
//import Worklist from './components/Worklist';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.discordapp.com/attachments/902748382341234842/1241726643786223706/Pastel_Light_Blue_Wallpaper_Hd_Resolution.jpeg?ex=664b3f8e&is=6649ee0e&hm=0538f9fa7cded9e15c2a6ae8a17d3b56668d076572e3f7f57f2309e18716dacf&');

  const handleBackgroundChange = (event) => {
    setBackgroundImage(event.target.value);
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}>
      <Navbar/>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
        }}>
        <Worklist/>
      </div>
    </div>
  );
}

export default App;
