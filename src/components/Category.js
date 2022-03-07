import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h2 className="text-center my-4">All Categories</h2>

      {/* -------------------------------------------------------------------------- */}
      <div className="m-auto" style={{ width: "70%" }}>
        <div class="row row-cols-7 g-4">
          <div className="col">
            <Link
              className="btn btn-dark my-2 mx-2"
              to="/business"
              role="button"
            >
              Business
            </Link>
          </div>
          <div className="col">
            <Link
              className="btn btn-dark my-2 mx-2"
              to="/entertainment"
              role="button"
            >
              Entertainment
            </Link>
          </div>
          <div className="col">
            <Link
              className="btn btn-dark my-2 mx-2"
              to="/general"
              role="button"
            >
              General
            </Link>
          </div>
          <div className="col">
            <Link className="btn btn-dark my-2 mx-2" to="/health" role="button">
              Health
            </Link>
          </div>
          <div className="col">
            <Link
              className="btn btn-dark my-2 mx-2"
              to="/science"
              role="button"
            >
              Science
            </Link>
          </div>
          <div className="col">
            <Link className="btn btn-dark my-2 mx-2" to="/sports" role="button">
              Sports
            </Link>
          </div>
          <div className="col">
            <Link
              className="btn btn-dark my-2 mx-2"
              to="/technology"
              role="button"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
