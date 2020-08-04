import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardText, 
    CardBody, 
    CardLink,
    CardTitle, 
    CardSubtitle,
    Container

  } from 'reactstrap';
  


const Article = ({loading,articles}) => {
    if(loading)
        return<h1>Loading...</h1>
    return(
        <div className="card">
          <Container >        
            <Card>
            {articles.map(article => (
            <div  key={article.title}>
               <CardBody>
                    <CardTitle><b>Title: </b>{article.title}</CardTitle>
                    <CardSubtitle><i><b>Author:</b> </i> {article.author}</CardSubtitle>
                </CardBody>
                <img src={article.urlToImage} style={{width:"20vw"}} alt="My Awesome " className="img"/>
                <CardBody>
                    <CardText><b>Content:</b> {article.content}</CardText>
                    <CardLink href={article.url} >Read More</CardLink>
                </CardBody>
            </div>
            ))}
            </Card>    
            </Container>
            
        </div>
    );
};

export default Article;