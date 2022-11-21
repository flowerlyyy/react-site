import './Emails.scss';
export const Emails=()=>{
    return (
<div className="email wide-container">
        <p className="firsthead">
          JOIN SHOPPING COMMUNITY TO<br />
          GET MONTHLY PROMO
        </p>
        <p>Type your email down below and be young wild generation</p>
        <div className="buttype">
          <input type="text" name="email" placeholder="Add your email here" />
          <button type="submit">SEND</button>
        </div>
      </div>
    );
};