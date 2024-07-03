import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="nav">
      <li className="Logo">
        <img src="/images/Logo.png" alt="CODE" />
      </li>
      <li className="navEl">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </li>
      <li className="regBtn">
        <img src="/images/Register.png" alt="REGISTER" />
      </li>
    </ul>
  );
}
