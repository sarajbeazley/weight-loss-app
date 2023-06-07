import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon";
import InstaIcon from "./InstaIcon";

export default function Newsletter(){
    return(
        <container className="newsletter-footer">
        <section className="newsletter-left">
          <p className="sign-up-newsletter">Sign up to our Newsletter</p>
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
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
        </section>
        <section className="newsletter-right">
          <p className="get-in-touch">Get in Touch</p>
          <small>+44 800 797 4205 + hello@weight-loss-community.com</small>
          <p>Join our Community</p>
          <small>blah blah blah</small>
        </section>
      </container>
    )
}