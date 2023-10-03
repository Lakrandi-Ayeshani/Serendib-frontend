import React from 'react'
import NewsCard from '../components/NewsCard'

const NewsHeaders = ( {articles, setClickedArticle}) => {
  return (
    <div>
      <div className='news-header'>
        <h1 className='text-center p-3'>News Headers</h1>
      </div>
      <div>
        <NewsCard articles={articles} setClickedArticle={setClickedArticle}/>
      </div>
    </div>
  )
}

export default NewsHeaders;