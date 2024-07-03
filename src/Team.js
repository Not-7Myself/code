import "./Team.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Team() {
  const lnk = "images/Ellipse.png";
  return (
    <div className="container" style={{ backgroundImage: `url(${lnk})` }}>
      <NavBar />
      <hr />
      <div className="team">
        <h1>CODE Team</h1>
        <div className="P">
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="President"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Robotics President"
          />
        </div>
        <div className="VP">
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Vice President"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Vice President"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Robotics Vice President"
          />
        </div>
        <div className="D">
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Director"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Directior"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Robotics Director"
          />
        </div>
        <div className="D">
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Director"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Directior"
          />
          <Card
            image="https://swiperjs.com/demos/images/nature-2.jpg"
            Name="John Doe"
            Post="Robotics Director"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Card({ image, Name, Post }) {
  return (
    <div className="card">
      <img src={`${image}`} alt="JohnPic" />
      <h1>{Name}</h1>
      <h3>{Post}</h3>
    </div>
  );
}
