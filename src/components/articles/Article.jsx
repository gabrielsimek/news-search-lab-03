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
      <h2>{source}</h2>
      <h3>{description}</h3>
      <p>{content}</p>
      <p>{url}</p>
      <p>{publishedAt}</p>
    </li>
  );
 
};

Article.propTypes = {
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;

