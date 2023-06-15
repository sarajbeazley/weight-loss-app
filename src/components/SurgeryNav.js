import { useState, useEffect, useRef } from "react";
import "../App.css";

export default function SurgeryNav() {
  const [isSurgeryOpen, setIsSurgeryOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    // this function will be called whenever a click event occurs
    const handleClick = (e) => {
      // if the target of the click is not within the dropdown or the Surgery menu item, close the dropdown
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setIsSurgeryOpen(false);
    };

    // attach the event listener to the window
    window.addEventListener("click", handleClick);

    // return function to be called when unmounted
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const toggleSurgeryMenu = () => {
    setIsSurgeryOpen(!isSurgeryOpen);
  };

  return (
    <nav>
      <ul>
        <li className="surgery" ref={node}>
          <p onClick={toggleSurgeryMenu}>
            <b>Surgery</b>
          </p>
          {isSurgeryOpen && (
            <ul className="dropdown-menu show">
              <li>Gastric band</li>
              <li>Gastric bypass</li>
              <li>Gastric sleeve</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
