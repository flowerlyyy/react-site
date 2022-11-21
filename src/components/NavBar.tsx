import './NavBar.scss';
export const NavBar=()=>{
    return (
<nav className="desktop-only">
        <a href="#" className="nav-link">CATALOGUE</a>
        <a href="#" className="nav-link">FASHION</a>
        <a href="#" className="nav-link">FAVOURITE</a>
        <a href="#" className="nav-link">LIFESTYLE</a>
        <button className="sign">Sign up</button>
      </nav>
    );
};