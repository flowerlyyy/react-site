import './Logos.scss';
import hm from './Rectangle 36 (1).png';
import pbey from './Rectangle 44.png';
import shopify from './Rectangle 38.svg';
import lacoste from './Rectangle 45.svg';
import levis from './Rectangle 43.svg';
import amazon from './Rectangle 41.svg';
export const Logos=()=>{
return (
<div className="logo wide-container">
        <div className="pictures">
          <img src={hm} alt="h.m" />
          <img src={pbey} alt="pbey" />
          <img src={shopify} alt="shopify" />
          <img src={lacoste} alt="lacoste" />
          <img src={levis} alt="levis" />
          <img src={amazon} alt="amazon" />
        </div>
      </div>
);
};