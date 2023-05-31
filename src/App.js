import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <logo className="logo">LOGO</logo>
        <p className="surgery">Surgery</p>
        <p className="consultation">Consultation</p>
        <p className="shop">Shop</p>
        <p className="talk">Talk to us: 0800 797 4205</p>
        <p className="support">Support</p>
        <button className="button-signup">Sign Up</button>
      </nav>
      <main>
        <main className="main-section-one">
          <h2>
            WEIGHT LOSS MADE EASY, WE ARE HERE TO HELP YOU.
            <p className="main-text">
              Whether you are looking for advise on surgery, to find out about
              the latest and most effective weight loss pills on the market or
              for anything else weight loss related, we have it covered.
            </p>
            <p>
              <button className="button-book">
                Book your FREE consultation today!
              </button>
            </p>
            <p>
              <button className="button-callback">Request a callback</button>
              <Form />
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
      <p className="fill-out-form">
        <b>Please fill out the form below to request a call back</b>
      </p>
      <form className="form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Phone Number" />
      </form>
      <footer className="footer">
        This is the footer: Here will go contact details and other links
      </footer>
    </div>
  );
}

export default App;
