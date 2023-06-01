import { Link } from "react-router-dom";

export default function MainPage(){
   return(
    <div className="container">
      <nav className="nav-bar">
        <p>
          <img className="logo" src="https://t3.ftcdn.net/jpg/02/00/59/16/240_F_200591657_hadzwcNvSeW9Y8ny0koAfv0hHPBtWoS4.jpg"/>
        </p>
        <p className="about"><b>About Us</b></p>
        <p className="surgery"><b>Surgery</b></p>
        <p className="shop"><b>Shop</b></p>
        <p className="talk"><b>Talk to us: 0800 797 4205</b></p>
        <p className="support"><b>Support</b></p>
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
              <Link to="/form"><button className="button-callback">Request a callback</button></Link>
            </p>
          </h2>

          <img
            src="https://www.mysouthernhealth.com/wp-content/uploads/2016/02/weight-loss-FEATURE-GettyImages-580503159-320x320.jpg
            "
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
      <p className="expert">
        <h1>Ask an Expert</h1>
        <p className="expert-ask">Do you have a question about surgery? Want to enquire about a procedure? Fill in the form and we will be in touch very soon.</p>
      </p>
      <container className="expert-form-container">
      <form className="expert-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone Number" />
        <textarea type="message" placeholder="Message" />
      </form>
      </container>
      <footer className="footer">
      <p className="contact"><b>Contact Us</b></p>
        <p className="blog"><b>Blog</b></p>
        <p className="testimonials"><b>Testimonials</b></p>
        <p className="community"><b>Community</b></p>
        <p className="support"><b>Support</b></p>
      </footer>
      <small>2023 CoName. All rights reserved.</small>
        <small>Registered in England No. 210580. Address 286 Kilburn Lane, London W10 4BW, England. Terms and conditions subject to change without notice.</small>
    </div>
   )

   
}