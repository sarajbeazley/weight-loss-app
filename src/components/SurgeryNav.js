import { useState } from "react";

export default function SurgeryNav(){
    const [isSurgeryOpen, setIsSurgeryOpen] = useState(false)

    const toggleSurgeryMenu = () =>{
        setIsSurgeryOpen(!isSurgeryOpen);
    };

return (
<nav>
<ul>
  <li className="surgery">
    <p onClick={toggleSurgeryMenu}><b>Surgery</b></p>
    {isSurgeryOpen && (
      <ul className="dropdown-menu">
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