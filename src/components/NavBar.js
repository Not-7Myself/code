export default function NavBar() {
  
  return (
    <ul className="nav">
      <li className="Logo">
        <img src="images/Logo.png" alt="CODE" />
      </li>
      <li className="navEl">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </li>
      <li className="regBtn">
        <img src="images/Register.png" alt="REGISTER" />
      </li>
    </ul>
  );
}
