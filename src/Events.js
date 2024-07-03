import "./Events.css";
import NavBar from "./components/NavBar";
import Event from "./components/Event";
import Footer from "./components/Footer";

export default function Events() {
  const lnk = "images/Ellipse.png";
  return (
    <div className="container" style={{ backgroundImage: `url(${lnk})` }}>
      <NavBar />
      <hr />
      <div className="main">
        <Event />
      </div>
      <Footer />
    </div>
  );
}
