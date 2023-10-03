import React from 'react'
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/card'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({articles, setClickedArticle}) => {

  const navigate = useNavigate();

  const handleClick = (article) => {
    setClickedArticle(article);
    navigate('/newspage')
  }
  

  return (
    <div className='container'>
       <Row xs={1} md={2} className="g-4">
      {articles.map((article, index) => (
        <Col>
        <Card key={index} className='border-5 m-3 news-card' onClick={() => handleClick(article)}>
          <Card.Body>
            <Card.Title className='text-start'>{article.title}</Card.Title>
            <div >
              <Card.Text className='text-start m-0'>{article.source.name} - {article?.author }</Card.Text>
              <p className='text-start date-text'>{article.publishedAt.slice(0,10)}   {article.publishedAt.slice(11,16)}</p>
            </div>
            {article.urlToImage ? (
              <Row>
                <Col className='d-flex justify-content-center'>
                  <Card.Img src={article.urlToImage}></Card.Img>
                </Col>
                <Col>
                  <Card.Text className='text-start'>{article.description}</Card.Text>
                </Col>
              </Row>
            ) : (
              <Card.Text className='text-start'>{article.description}</Card.Text>
            )}
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>
    </div>
  )
}

export default NewsCard