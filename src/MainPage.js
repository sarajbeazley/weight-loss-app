import { Link } from "react-router-dom";

export default function MainPage(){
   return(
    <div className="container">
      <nav className="nav-bar">
        <p className="logo">LOGO</p>
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
            src="https://quickbooks.intuit.com/uk2/uk/uk-2021//assets/home/promo-90-6.jpg"
            alt="random-image"
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
        <p>Do you have a question about surgery? Want to enquire about a procedure? Fill in the form and we will be in touch very soon.</p>
      </p>
      <form className="form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone Number" />
      </form>
      <footer className="footer">
        This is the footer: Here will go contact details and other links
      </footer>
    </div>
   )

   
}