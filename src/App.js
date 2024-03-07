import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer';
import {Home} from './home.js';

import {LoginPage} from './components/LoginPage.js'
import { SignUp } from './components/SignUp.js';
import {Location} from './components/Location.js'
import { LocTrack2 } from './LocTrack2.js';
import { MapWithPath } from "./components/MapWithPath.js";
import { LocTrack } from './LocTrack.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        {/* <Route path="/loginfinal" element={<LoginFinal/>}/> */}
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/loctrack" element={<LocTrack/>}/>
        <Route path="/loctrack2" element={<LocTrack2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
