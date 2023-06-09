import { Link } from "react-router-dom";
import ExpertForm from "./components/ExpertForm";
import Newsletter from "./components/Newsletter";
import SurgeryNav from "./components/SurgeryNav";

export default function MainPage() {
  return (
    <>
      <div className="page">
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
            <SurgeryNav />
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
                  <button className="button-callback">
                    Request a callback
                  </button>
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
              <img
                className="festival"
                src="https://media.istockphoto.com/photos/audience-with-hands-in-the-air-at-a-music-festival-picture-id615407772?k=6&m=615407772&s=170667a&w=0&h=WBAenwWe9YbAIoEyiu8OX4F50xVBpmbbf6yMpeik4OI="
                alt="festival-image"
              ></img>
            </section>
            <section className="questions">
              Are you confused by what's on the market?
              <p className="blue-text">Image below & add a link here</p>
              <img
                className="yoga"
                src="https://th.bing.com/th/id/OIP.vpGixTTSu4Vu2wde9pCHTQHaE8?pid=ImgDet&rs=1"
                alt="yoga-image"
              ></img>
            </section>
            <section className="questions">
              Would you like to book a consultation?
              <p className="blue-text">Image below & add a link here</p>
              <img
                className="running"
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/19/18/idoh-exercise.jpg"
                alt="runners-image"
              ></img>
            </section>
          </main>
        </main>
        <ExpertForm />
      </div>
      <Newsletter />
    </>
  );
}
