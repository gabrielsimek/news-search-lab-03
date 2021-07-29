import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = 
({ source, author, title, description, url, image, publishedAt, content }) => {
  return (
    <li>
      <h1>{title}</h1>
      <img 
        src={image}/>
      <h2>{author}</h2>
      <p>{publishedAt}</p>
      <h2>{source}</h2>
      <h3>{description}</h3>
      {/* <p>{content}</p> */}
      <a href={url}>To Article</a>
      
    </li>
  );
 
};

Article.propTypes = {
  source: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  publishedAt: PropTypes.string,
  content: PropTypes.string,
};

export default Article;

