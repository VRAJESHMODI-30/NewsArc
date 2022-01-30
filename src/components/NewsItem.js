import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge  bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://image.shutterstock.com/image-vector/background-screen-saver-on-breaking-600w-1538146961.jpg"
          }
          className="card-img-top"
          alt="Loading..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description + " "}
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              // className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </p>
          <p className="card-text">
            <small className="text-muted">
              By <strong>{author}</strong> on <strong>{date}</strong>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
