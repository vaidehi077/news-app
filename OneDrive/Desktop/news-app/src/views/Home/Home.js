import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import NewsArticle from '../../component/NewsArticle/NewsArticle';

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pune")

  const loadNews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-05-01&to=2024-05-01&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews(); 
  }, []);

  useEffect(() => {loadNews()}, [searchQuery])

  return (
    <div>
      <h1>News App</h1>
      <input type='text' className='search-input-box' value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} />

      <div className="news-container">
        {news.map((newsArticle, index) => {
          const { author, title, description, url, urlToImage, publishedAt } = newsArticle;
          return (
            <NewsArticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
