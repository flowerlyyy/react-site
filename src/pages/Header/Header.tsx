import { NavBar } from '../../components/NavBar';
import './Header.scss';
import logo from './Frame 57.svg';

export const Header=()=>{
    return(
<header className="container">
      <img className="first" src={logo} alt="logo" />
      <NavBar/>
      <button className="burger-menu mobile-only">burger</button>
    </header>

    );
};