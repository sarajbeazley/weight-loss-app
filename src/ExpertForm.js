import { useLocation } from "react-router-dom";


export default function ExpertForm() {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    if (!isMainPage){
        return null;
    }
  return (
    <>
      <p className="expert">
        <h1>Ask an Expert</h1>
        <p className="expert-ask">
          Do you have a question about surgery? Want to enquire about a
          procedure? Fill in the form and we will be in touch very soon.
        </p>
      </p>
      <container className="expert-form-container">
        <form className="expert-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone Number" />
          <textarea type="message" placeholder="Message" />
          <br></br>
          <button className="expert-submit">Submit</button>
        </form>
      </container>
    </>
  );
}
