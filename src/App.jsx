import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DarkMode222 from './components/DarkMode222';
import { useState } from 'react';
import SignIn from './pages/SignIn';
import Post from './pages/Post';

function App() {
  const [dark333, setdark333] = useState(false);
  const darkbutton333 = () => {
    setdark333(!dark333);
    console.log('🚀 ~ darkbutton333 ~ dark333:', dark333);
  };

  return (
    <div className="flex justify-center content-center">
      <div
        className={`${
          dark333
            ? 'bg-white text-indigo-950'
            : 'dark dark:bg-gray-900 dark:text-white'
        } text-center  content-center overflow-auto max-w-[400px] flex-col justify-center  relative`}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/post" element={<Post />} />
          </Routes>
          <DarkMode222
            buttonName="🌚"
            darkbutton222={darkbutton333}
            className="absolute"
          />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
