import './HomePage.scss';
import leaf from './Vector 8.png';

import { Home } from './components/Home/Home';
import { Logos } from './components/Logos/Logos';
import { YellowContainer } from './components/YellowContainer/YellowContainer';
import { Favourite } from './components/Favourite/Favourite';
import { Phone } from './components/Phone/Phone';
import { Emails } from './components/Emails/Emails';
export const HomePage = ()=>{
    return (
    <>
    <Home/>
  <Logos/>
<YellowContainer />
      <div className="new container">
        <div className="pimg">
          <h1>NEW ARRIVALS</h1>
          <img className="leaf" src={leaf} alt="leaf" />
        </div>

        <div className="three-pictures"></div>
      </div>
      <Favourite />
      <Phone />
      
      
      <Emails />
      
    </>
    );
};