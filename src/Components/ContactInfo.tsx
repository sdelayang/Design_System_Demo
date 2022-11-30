import "./main.css";
import logo from "./assets/logo.png";
import { Typography } from "../LibraryComponents/Typography";
import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import twitterIcon from "./assets/twitter.png";
import linkedinIcon from "./assets/linkedin.png";
import { Link } from "../LibraryComponents/Link";

export const ContactInfo = () => {
  return (
    <>
      <div className="spacer" />
      <div id="contactinfo-div" className="column">
        <img src={logo} alt="Logo" style={{ width: 47, height: 39 }} />
        <div className="spacer" />
        <Typography variant="body1">Email address here</Typography>
        <Link href="tel:+46 000-000-0000">+46 000-000-0000</Link>
        <div className="spacer" />
        <div className="row row--centered">
          <img
            src={facebookIcon}
            alt="facebook-icon"
            style={{ width: 24, height: 24 }}
            className="contact-card-icon"
          />
          <img
            src={twitterIcon}
            alt="twitter-icon"
            style={{ width: 21, height: 17 }}
            className="contact-card-icon"
          />
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            style={{ width: 24, height: 24 }}
            className="contact-card-icon"
          />
          <img
            src={instagramIcon}
            alt="instagram-icon"
            style={{ width: 24, height: 24 }}
            className="contact-card-icon"
          />
        </div>
      </div>
    </>
  );
};
