import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsHeaders from './screens/NewsHeaders';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './screens/NewsPage';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedArticle, setClickedArticle ] = useState(null);

  console.log(clickedArticle);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL =`https://newsapi.org/v2/everything?q=tesla&from=2023-09-03&sortBy=publishedAt&apiKey=${API_KEY}`;
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URL);
        const { status, data } = response;

        if (status === 200) {
          setArticles(data.articles); // Assuming you want to display the 'articles' property
          setLoading(false);
        } else {
          setError('Error: We’re having trouble fetching the data.');
          setLoading(false);
        }
      } catch (error) {
        setError('Error: heeey', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewsHeaders articles={articles} setClickedArticle={setClickedArticle} />}/>
            <Route path="/newspage" element={<NewsPage clickedArticle={clickedArticle} />}/>
          </Routes>
        </BrowserRouter>
        
      )}
    </div>
  );
}

export default App;
