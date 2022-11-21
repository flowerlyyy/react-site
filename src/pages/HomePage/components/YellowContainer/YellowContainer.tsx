import './YellowContainer.scss';
import girl2 from './Group 84.png';

 export const YellowContainer=()=>{
    return (
<div className="yellowcolor wide-container">
        <img className="yelgirl desktop-only" src={girl2} alt="girl2" />
        <div className="twopart">
          <div className="little">
            <h1><mark>PAYDAY</mark> <br />SALE NOW</h1>
            <p className="data1">
              Spend minimal $100 get 30% off <br />
              voucher code for your next purchase
            </p>
            <div className="box">
              <span className="data2"><b>1 June - 10 June 2021</b></span
              ><br />
              <span className="data3">*Terms & Conditions apply</span>
            </div>
            <button className="click">SHOP NOW</button>
          </div>
        </div>
      </div>
    );
 };