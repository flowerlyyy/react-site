import './HomePage.scss';
import leaf from './Vector 8.png';

import { Home } from './components/Home/Home';
import { Logos } from './components/Logos/Logos';
import { YellowContainer } from './components/YellowContainer/YellowContainer';
import { Favourite } from './components/Favourite/Favourite';
import { Phone } from './components/Phone/Phone';
import { Emails } from './components/Emails/Emails';
import { Carousel } from '../../components/Carousel/Carousel';
export const HomePage = ()=>{
    return (
    <>
    <Home/>
  <Logos/>
  <Carousel />
<YellowContainer />
      <Favourite />
      <Phone />
      
      
      <Emails />
      
    </>
    );
};