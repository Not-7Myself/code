import "./Events.css";
import NavBar from "./components/NavBar";
import Event from "./components/Event";
import Footer from "./components/Footer";

export default function Events({ data }) {
  console.log(data);
  const lnk = "/images/Ellipse.png";
  return (
    <div className="containers" style={{ backgroundImage: `url(${lnk})` }}>
      <NavBar />
      <hr />
      <div className="main">
        <Event data={data} />
      </div>
      <Footer />
    </div>
  );
}
