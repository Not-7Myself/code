import Discord from "../icons/Discord";
import Mail from "../icons/Mail";

export default function Event({ data }) {
  console.log(data);
  return (
    <div className="box">
      <div className="poster">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="content">
        <h1>{data.Nome}</h1>
        <h3>
          {data.domain} <br />
          {data.teams} <br />
          {data.participants} <br />
        </h3>
        <p>
          <h3>Prelims:</h3>
          <br />
          {data.prelims} <br /> <br />
          <h3>Finals:</h3>
          <br />
          {data.finals}
        </p>
        <br />
        <p className="contact">
          <Discord /> {data.discord} &emsp;
          <span>
            {" "}
            <Mail /> {data.mail}{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
