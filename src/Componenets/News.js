import React, { useEffect, useRef, useState } from "react";
import NewsApp from "./NewsApp";
import './News.css';


function News() {
  const apiKey = "ff0ffc3b918146458c7caa9725fc2f3d";
 
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery]=useState('tesla');
  const queryRef=useRef(null);

  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-06-23&sortBy=publishedAt&apiKey=${apiKey}`;


  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (error) {
      console.log(error, "error occurd");
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const queryValue= queryRef.current.value;
    setQuery(queryValue);

  }
  return (
    <div className="news">
        <h1 style={{fontFamily:'monospace',fontSize:'3rem',textAlign:'left',marginBottom:'20px'} }>News Daily</h1>
        <form onSubmit={handleSubmit}>
            <input  placeholder='Search here..' className="query-input" type="text" ref={queryRef}/>
            <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit" />
        </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 48%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}>
        {newsList.map((news) => {
          return <NewsApp key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default News;
