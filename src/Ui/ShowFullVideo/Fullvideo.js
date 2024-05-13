import "./Fullvideo.css";

import ReactPlayer from "react-player";

function Fullvideo() {
  return (
    <div className="Fullvideo">
      <div className="video">
        <ReactPlayer
          url="https://songdb.s3.ap-south-1.amazonaws.com/kvcet-sy/sy+(2).mp4"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}

export default Fullvideo;
