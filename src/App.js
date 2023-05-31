
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
      <logo className="logo">LOGO</logo>
      <p className="surgery">Surgery</p>
      <p className="consultation">Consultation</p>
      <p className="shop">Shop</p>
      <p className="talk">Talk to us</p>
      <p className="support">Support</p>
      <button className="button">Sign In</button>
      </nav>
      <main>
      <main className="main-section-one">
    <h2>WEIGHT LOSS MADE EASY. WE ARE HERE TO HELP YOU.Whether you are looking for advise on surgery, to find out about the latest and most effective weight loss pills on the market or for anything else weight loss related, we have it covered<button>Click here to book</button></h2>
 
    <img src="https://quickbooks.intuit.com/uk2/uk/uk-2021//assets/home/promo-90-6.jpg"alt="random-image"></img> 
    </main>
    <main className="main-section-two">
    <section className='questions'>Are you struggling with your weight? IMAGE BELOW & ADD A LINK HERE</section>
    <section className='questions'>Are you confused by what's on the market? IMAGE BELOW & ADD A LINK HERE</section>
    <section className='questions'>Would you like to book a consultation? IMAGE BELOW & ADD A LINK HERE</section>
      </main>
      </main>
      <footer className="footer">This is the footer: Here will go contact details and other links</footer>
    </div>
  );
}

export default App;
