import React from "react";

const CarouselItem = (props) => {
  const { imgURL, headLine, newsUrl } = props;
  return (
    <>
      {/* <img src={imgURL} />
      <p className="legend">
        {headLine}{" "}
        <a href={newsUrl} target="_blank">
          read more
        </a>
      </p> */}
      <div
        style={{
          background: `url(${imgURL}) no-repeat center center / cover`,
          height: "55vh",
          border: "solid black 1px",
          color: "white",
          font: "large",
          fontWeight: "bold",
        }}
      >
        <p
          style={{
            backgroundColor: "black",
          }}
        >
          {headLine}...
          <a style={{ font: "small-caption" }} target="_blank" href={newsUrl}>
            Read more
          </a>
        </p>
      </div>
    </>
  );
};

export default CarouselItem;
