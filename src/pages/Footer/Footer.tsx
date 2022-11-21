import './Footer.scss';
import facebook from './Group 10.png';
import instagram from './Group 11.png';
import twitter from './Group 12.png';
import linkedin from './Group 13.png';
export const Footer=()=>{
    return (
<div className="end wide-container">
        <div className="about-us container">
          <div className="fashion">
            <h1>FASHION</h1>
            <p>
              Complete your style with awesome <br />
              clothes from us.
            </p>
            <div className="apps">
              <img className="social" src={facebook} alt="facebook" />
              <img className="social" src={instagram} alt="instagram" />
              <img className="social" src={twitter} alt="twitter" />
              <img className="social" src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="sequences">
            <div>
              <ul>
                <li><a href="#" className="primary">Company</a></li>
                <li><a href="#" className="lists">About</a></li>
                <li><a href="#" className="lists">Contact us</a></li>
                <li><a href="#" className="lists">Support</a></li>
                <li><a href="#" className="lists">Careers</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#" className="primary">Quick link</a></li>
                <li><a href="#" className="lists">Share Location</a></li>
                <li><a href="#" className="lists">Orders Tracking</a></li>
                <li><a href="#" className="lists">Size Guide</a></li>
                <li><a href="#" className="lists">FAQs</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#" className="primary">Legal</a></li>
                <li><a href="#" className="lists">Terms & conditions</a></li>
                <li><a href="#" className="lists">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};