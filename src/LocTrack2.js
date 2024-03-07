import './App.css';
import { NavBar } from './components/NavBar';
import { LocTrack } from './components/MapWithPath';
import {Footer} from './components/Footer';
import {Location} from './components/Location.js'
import 'bootstrap/dist/css/bootstrap.min.css';
export const LocTrack2 = () => {
    return (
        <>
          <NavBar />
          <Location />
          <Footer/>
        </>
      );
}