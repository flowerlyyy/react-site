import './Home.scss';
import white from './Rectangle 3.png';
import yellow from './Rectangle 6.png';
import leave from './Vector 9.png';
import girl from './beautiful girl.jpg';
export const Home=()=>{
    return(
<div className="home container">
        <div className="live">
          <h1 className="desktop-only">
            LET’S
            <img className="backimage" src={white} alt="white" /><br />
            EXPLORE <br />
            UNIQUE
            <img className="backimage" src={yellow} alt="yellow" />
            <br />
            CLOTHES.
          </h1>
          <div className="textbutton">
            <p>Live for Influential and Innovative fashion!</p>
            <div className="two">
              <img className="littleleaf" src={leave} alt="yellow" />
              <button className="shop">Shop Now</button>
            </div>
          </div>
        </div>
        <img className="girl desktop-only" src={girl} alt="girl" />
      </div>
    );
};