export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Stats />
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div>
        <h1>50+</h1>
        <p>Members</p>
      </div>
      <div>
        <h1>300+</h1>
        <p>Participants</p>
      </div>
      <div>
        <h1>50+</h1>
        <p>Schools</p>
      </div>
      <div>
        <h1>15</h1>
        <p>Events</p>
      </div>
    </div>
  );
}
