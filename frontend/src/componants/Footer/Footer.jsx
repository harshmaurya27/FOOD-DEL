import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="footer-logo">FOOD_DEL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius
            illum porro commodi magnam! Alias quod vel, qui deserunt perferendis
            dignissimos atque architecto ipsa quaerat dolorem voluptatum unde
            eius! Consequuntur.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedInIcon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-212-234-6453</li>
            <li>contact@foodDel.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 © foodDel.com - all right reserved.
      </p>
    </div>
  );
};

export default Footer;
