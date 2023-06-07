import { Link } from "react-router-dom";
import ExpertForm from "./components/ExpertForm";
import Newsletter from "./components/Newsletter";
// import FacebookIcon from "./components/FacebookIcon";
// import TwitterIcon from "./components/TwitterIcon";
// import InstaIcon from "./components/InstaIcon";

export default function MainPage() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <p>
          <img
            className="logo"
            src="https://t3.ftcdn.net/jpg/02/00/59/16/240_F_200591657_hadzwcNvSeW9Y8ny0koAfv0hHPBtWoS4.jpg"
          />
        </p>
        <p className="about">
          <b>About Us</b>
        </p>
        <p className="surgery">
          <b>Surgery</b>
        </p>
        <p className="shop">
          <b>Shop</b>
        </p>
        <p className="community">
          <b>Community</b>
        </p>
        <p className="blog">
          <b>Blog</b>
        </p>
        <p className="blog">
          <b>Newsletter</b>
        </p>
        <button className="button-signup">Sign Up</button>
      </nav>
      <main>
        <main className="main-section-one">
          <h2>
            WEIGHT LOSS MADE EASY, WE ARE HERE TO HELP YOU.
            <p className="main-text">
              Whether you are looking for advice on surgery, to find out about
              the latest and most effective weight loss pills on the market or
              for anything else weight loss related, we have it covered.
            </p>
            <p>
              <button className="button-book">
                Book your FREE consultation today!
              </button>
            </p>
            <p>
              <Link to="/form">
                <button className="button-callback">Request a callback</button>
              </Link>
            </p>
          </h2>

          <img
            src="https://www.mysouthernhealth.com/wp-content/uploads/2016/02/weight-loss-FEATURE-GettyImages-580503159-320x320.jpg"
            alt="tape-image"
          ></img>
        </main>
        <main className="main-section-two">
          <section className="questions">
            Are you struggling with your weight?
            <p className="blue-text">Image below & add a link here</p>
          </section>
          <section className="questions">
            Are you confused by what's on the market?
            <p className="blue-text">Image below & add a link here</p>
          </section>
          <section className="questions">
            Would you like to book a consultation?
            <a
              href="https://dictionary.cambridge.org/dictionary/english/consultation"
              className="blue-text"
            >
              Image below & add a link here
            </a>
          </section>
        </main>
      </main>
      <ExpertForm />
      <Newsletter />
    </div>
  );
}
