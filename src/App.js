import "./App.css";
import MainPage from "./MainPage";
import FormPage from "./FormPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    {/* <h1>Welcome to my website</h1> */}
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
    </div>
  );
}

export default App;
