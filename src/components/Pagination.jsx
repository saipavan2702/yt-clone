import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "./states/store";

const Pagination = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const getPrev = (event) => {
    event.preventDefault();
    if (page > 0) dispatch(setPage(page - 1));
  };

  const getNext = (event) => {
    event.preventDefault();
    if (page < 9) dispatch(setPage(page + 1));
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <button className="m-3 btn btn-primary" onClick={getPrev}>
        Prev
      </button>
      <div className="btn btn-outline-primary">{page}</div>
      <button className="m-3 btn btn-primary" onClick={getNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
