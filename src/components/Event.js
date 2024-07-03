import Discord from "../icons/Discord";
import Mail from "../icons/Mail";

export default function Event() {
  return (
    <div className="box">
      <div className="poster">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Event" />
      </div>
      <div className="content">
        <h1>
          Hack<span style={{ color: "purple" }}>AI</span>thon
        </h1>
        <h3>
          Domain: IX - XII <br />
          No. of Teams / School: 1 <br />
          No. of Participants / Team: 1-3 <br />
        </h3>
        <p>
          <h3>Prelims:</h3>
          <br />
          Participants will be given 72 hours to create an app/website/chrome
          extension/etc., relevant to the problem statement(AI related). <br />{" "}
          <br />
          <h3>Finals:</h3>
          <br /> 8 shortlisted teams will be asked to present their applications
          and answer questions regarding it, on the day of event
        </p>
        <br />
        <p className="contact">
          <Discord /> _notmyself / zekernZ &emsp; <Mail />{" "}
          HackAIthon24@gmail.com
        </p>
      </div>
    </div>
  );
}
