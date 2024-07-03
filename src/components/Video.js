export default function Video() {
  return (
    <div className="vid">
      <div>
        <h1>Teaser</h1>

        <video
          src="images/ishura.mp4"
          controls
          disablePictureInPicture
          controlsList="nodownload"
        ></video>
      </div>
    </div>
  );
}
