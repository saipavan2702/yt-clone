import React from "react";
import { useEffect } from "react";
import "./Feed.css";
import Pagination from "./Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData, setMediaURL } from "./states/store";
import { useSelector } from "react-redux";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const data = useSelector((state) => state.data);

  const handleEvent = (mediaURL) => {
    dispatch(setMediaURL(mediaURL));
    navigate("/videos");
  };

  useEffect(() => {
    async function fecthFeed(page) {
      const url = `https://internship-service.onrender.com/videos?page=${page}`;
      const response = await axios.get(url);
      var videos = await response.data;

      dispatch(setData(videos.data.posts));
    }

    fecthFeed(page);
  }, [dispatch, page]);

  const renderFeed = () => {
    return data.map((videos) => (
      <div className="mt-3 d-flex" key={videos.postId}>
        <img
          className="img-fluid"
          src={videos.submission.thumbnail}
          alt=""
          onClick={() => handleEvent(videos.submission.mediaUrl)}
        />
      </div>
    ));
  };

  return (
    <div className="body">
      <div className="wrapper flex-wrap">{renderFeed()}</div>
      <Pagination />
    </div>
  );
};

export default Feed;
