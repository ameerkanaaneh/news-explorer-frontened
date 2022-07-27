import { Link } from "react-router-dom";
import github from "../../images/github.svg";
import facebook from "../../images/facebook.svg";

function Footer(props) {
  return (
    <footer className={props.type ? "footer footer_page_saved-news" : "footer"}>
      <p className="footer__mark">© 2022 Supersite, Powered by News API</p>
      <div className="footer__group">
        <div className="footer__link-wrapper">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://practicum.com/en-isr/?gclid=Cj0KCQjwxIOXBhCrARIsAL1QFCbJkE25fh4-LEoR0E2TQ4-iKZJDxxbeSkpQ_-3nTfiY6GXSeKAEFGUaAvzEEALw_wcB"
            className=" footer__practicum"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__social-wrapper">
          <a className="footer__social" href="https://github.com/ameerkanaaneh">
            <img className="footer__icon" alt="icon" src={github} />
          </a>

          <a className="footer__social" href="https://www.facebook.com">
            <img className="footer__icon" alt="icon" src={facebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
