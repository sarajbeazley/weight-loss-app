import { Link } from "react-router-dom";
import ExpertForm from "./components/ExpertForm";
import Facebook from "./components/Facebook";

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
      <container className="newsletter-container">
        <section className="newsletter-left">
          <p className="sign-up-newsletter">Sign up to our newsletter</p>
          <small className="newsletter-text">
            Stay updated with all the latest news and get an exclusive
            invitation to our events when you subscribe to our emails. Learn
            more about our Privacy Policy here. Terms and conditions apply.{" "}
          </small>
          <p className="email">Email Address</p>
          <form className="newsletter-form">
            <input
              className="email-input"
              type="email"
              placeholder="your@address.com"
            />
            <button className="newsletter-submit">Submit</button>
          </form>
         <Facebook />
          <img
            className="socials"
            src="src/assets/img/instagram-svgrepo-com.svg"
            alt="twitter"
          ></img>
          <img
            className="socials"
            src="/assets/img/twitter-black-shape-svgrepo-com.svg"
            alt="insta"
          ></img>
        </section>
        <section className="newsletter-right">
          <p className="get-in-touch">Get in Touch</p>
          <small>+44 800 797 4205 + hello@weight-loss-community.com</small>
          <p>Join our Community</p>
          <small>blah blah blah</small>
        </section>
       
      </container>
     
    </div>
  );
}
