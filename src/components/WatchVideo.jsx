import React from "react";
import { useSelector } from "react-redux";

const WatchVideo = () => {
  const data = useSelector((state) => state.data);
  const mediaURL = useSelector((state) => state.mediaURL);

  const selectedVideo = data.map(
    (videos) => videos.submission.mediaUrl === mediaURL
  );

  return (
    <div className="aspect-video m-2 align-items-center d-flex justify-content-center">
      <iframe
        title={selectedVideo.postId}
        src={mediaURL}
        allowFullScreen
        frameBorder="0"
        width="600px"
        height="500px"
      ></iframe>
      {/* <h1>{selectedVideo.submission.title}</h1> */}
    </div>
  );
};

export default WatchVideo;
