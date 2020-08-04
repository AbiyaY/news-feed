import React,{useState, useEffect} from 'react';


import Header from './components/Header';
import Axios from 'axios';
import Article from './components/Article';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App= () => {

    const APP_KEY = "0d5728e14f074daba896a0fe7d6de0ca";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  
  


  useEffect(() => {

    const fetchArticle = async () => {
      setLoading(true);
      const res = await Axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${APP_KEY}`);
      setArticles(res.data.articles);
      console.log(res.data.articles)
      setLoading(false);
    }

    fetchArticle(); 

  },[]);


 

  return (
    <div className="App">
      
      <Header />
      
      <Article loading={loading} articles={articles} />
    </div>
  );
}

export default App;
