
import './Header.scss';
import logo from './Frame 57.svg';
import { NavBar } from '../../components/NavBar/NavBar';

export const Header=()=>{
    return(
<header className="container">
      <img className="first" src={logo} alt="logo" />
      <NavBar/>
      <button className="burger-menu mobile-only">burger</button>
    </header>

    );
};