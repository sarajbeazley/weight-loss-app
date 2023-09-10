import "./App.css";
import MainPage from "./MainPage";
import FormPage from "./FormPage";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (

      <div>
        {/* <h1>TOGETHER WE ARE STRONGER</h1> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
        <Footer />
      </div>

  );
}

export default App;
