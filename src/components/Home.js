import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import Category from "./Category";

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  let a = 0;

  // const capitalizeFirstLetter = (str) => {
  //   let str1 = str.slice(1);
  //   let newStr = str.charAt(0).toUpperCase() + str1;
  //   return newStr;
  // };

  const updateNews = async () => {
    props.setProgress(15);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(75);
    console.log("OK");
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    document.title = "Home - NewsArc";

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
      />
      <h1 className="text-center mt-5 mb-4 pt-5 pb-2">
        <u> NewsArc - Home</u>
      </h1>
      {loading && <Spinner />}
      <Carousel
        className="d-flex justify-content-center"
        width="80%"
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        transitionTime={2500}
        autoFocus={true}
        infiniteLoop={true}
        showStatus={false}
        useKeyboardArrows={true}
        // dynamicHeight={true}
      >
        {articles.map((element) => {
          return (
            <CarouselItem
              key={element.url}
              imgURL={
                element.urlToImage
                  ? element.urlToImage
                  : "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/02/breaking-news-live-01-1644109758.jpg"
              }
              headLine={element.title ? element.title : ""}
              // description={
              //   element.description
              //     ? element.description.slice(0, 100)
              //     : ""
              // }
              newsUrl={element.url}
              // author={element.author ? element.author : "Unknown"}
              // date={new Date(element.publishedAt).toGMTString()}
              // source={element.source.name}
            />
          );
        })}
      </Carousel>

      {/* --------------------------------------------Specific Categories--------------------------------------------------- */}

      <Category />
    </>
  );
};

export default Home;
