import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsPage = ({clickedArticle}) => {
  return (
    <div className='mx-5 my-2'>
        <Link to="/" className=' back-link'>Back</Link>
        <p className='text-end date-text m-0'>{clickedArticle.publishedAt.slice(0,10)}   {clickedArticle.publishedAt.slice(11,16)}</p>
        <h1>{clickedArticle.title}</h1>
        <p className='text-start'>{clickedArticle.source.name} - {clickedArticle?.author }</p>
        <Row className='d-flex justify-content-center'>
             <img src={clickedArticle.urlToImage}></img>
        </Row>
        <p className='text-start my-3'>{clickedArticle.description}</p>
        <p className='text-start my-3'>{clickedArticle.content}</p>
        <a href={clickedArticle.url}>
              Original Article
        </a>
    </div>
  )
}

export default NewsPage