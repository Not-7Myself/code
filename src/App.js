import Timeline from "./components/Timeline";
import Video from "./components/Video";
import About from "./components/About";
import EventList from "./components/EventList";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
        <hr />
        <Hero>
          <Home />
        </Hero>
      </Header>
      <Timeline />
      <Video />
      <About />
      <EventList />
      <Footer />
    </div>
  );
}

function Header({ children }) {
  const lnk = "images/Ellipse.png";

  return (
    <div className="header" style={{ backgroundImage: `url(${lnk})` }}>
      {children}
    </div>
  );
}
