import './Favourite.scss';
import leaf from './Vector 9.png';
import girlsmiles from './Rectangle 50.png';
import secondsmiles from './Rectangle 49.png';
import arrow from './Arrow 1.svg';
export const Favourite=()=>{
return(
<div className="favourite container">
        <div className="youngimg">
          <h1>Young’s Favourite</h1>
          <img className="leaf2" src={leaf} alt="leaf" />
        </div>
        <div className="pink">
          <div className="collection1">
            <img className="smiles" src={girlsmiles} alt="pinkk" />
            <div className="textarrow">
              <div className="text">
                <a href="#" className="name">Trending on instagram </a>
                <a href="#" className="explore">Explore Now!</a>
              </div>
              <img className="arrow2" src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="collection2">
            <img className="smiles" src={secondsmiles} alt="punkkk" />
            <div className="textarrow">
              <div className="text">
                <a href="#" className="name">All Under $40 </a>
                <a href="#" className="explore">Explore Now!</a>
              </div>
              <img className="arrow2" src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
);
};