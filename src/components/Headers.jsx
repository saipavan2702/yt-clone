import React from "react";
import "./Headers.css";
import { BsYoutube } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Headers = () => {
  return (
    <div className="container-fluid d-flex justify-content-between align-items-center flex-row">
      <div className="start d-flex justify-content-center align-items-center">
        <div className="icon">
          <BsYoutube size={30} style={{ color: "red" }} />
        </div>
        <div
          className="name m-2"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Youtube
        </div>
      </div>
      <div className="center container-fluid">
        <form
          className="d-flex align-items-center justify-content-center"
          role="search"
        >
          <input
            className="form-control search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="end d-flex justify-content-center align-items-center">
        <div className="notify">
          <IoNotifications size={22} style={{ color: "#ffffff" }} />
        </div>
        <div className="logout m-2">
          <CgProfile size={22} style={{ color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};

export default Headers;
