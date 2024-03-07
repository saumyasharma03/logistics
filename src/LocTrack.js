import './App.css';
import { NavBar } from './components/NavBar';
import { MapWithPath } from './components/MapWithPath';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
export const LocTrack = () => {
    return (
        <>
          <NavBar />
          <MapWithPath />
          <Footer/>
        </>
      );
}