import React from "react";
import './NewsApp.css';

function NewsApp({news}) {
  return (
  <div className="news-card">
    <img src={news.urlToImage} alt={news.title} />
    <h2>{news.title}</h2>
    <p>{news.description}</p>
    <button className="btn-readmore" onClick={()=> {window.open(news.url)}}>Read More</button>

  </div>
  );
}

export default NewsApp;
