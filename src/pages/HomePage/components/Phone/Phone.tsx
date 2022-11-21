import './Phone.scss';
import appstore from './Rectangle 55.png';
import googleplay from './Rectangle 18.png';
import ellipse1 from './Ellipse 1.png';
import ellipse2 from './Ellipse 5.png';
import ellipse3 from './Ellipse 6.png';
import mobileapp from './Mobile app.png';
export const Phone=()=>{
return (
<div className="phone">
        <div className="download">
          <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
          <span
            >Get 30% off for first transaction using<br />
            Rondovision mobile app for now.</span
          >
          <div className="playstore">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
        <div className="circle desktop-only">
          <img className="ellipse" src={ellipse1} alt="ellipse1" />
          <img className="ellipse" src={ellipse2} alt="ellipse2" />
          <img className="ellipse" src={ellipse3} alt="ellipse3" />
          <img className="mobileapp" src={mobileapp} alt="mobileapp" />
        </div>
      </div>

    );
};