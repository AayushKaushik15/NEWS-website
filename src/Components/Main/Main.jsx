import React from "react";
import "./main.css";
import useNews from "../../Constant/useNews";
import { GoLinkExternal } from "react-icons/go";
// import { CiShare1 } from "react-icons/ci";

const Main = ({ query }) => {
  const { showData } = useNews(query);

  if (showData === 0) {
    return null;
  }

  return (
    <div className="main-container">
      {showData &&
        showData.map((value) => {
          const date = new Date(value?.publishedAt);
          const dateAndTime = date.toLocaleTimeString(date);
          const dateOne = date.toDateString(date);
          if (value?.title && value?.description && value?.urlToImage) {
            return (
              <div className="card" key={value.id}>
                <div className="card-header">
                  <img src={value.urlToImage} alt="news" />
                </div>
                <div className="text-container">
                  <h3 id="new-title">{value.title}</h3>
                  <h6 className="news-source">
                    {dateOne}: {dateAndTime}{" "}
                  </h6>
                  <p className="new-desc">{value.description}</p>
                  <a className="read-more" href={value.url} target="_blank">
                    Read more <GoLinkExternal className="link" />
                  </a>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default Main;
