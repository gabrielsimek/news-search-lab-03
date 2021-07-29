import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = 
({ source, author, title, description, url, image, publishedAt, content }) => {
  return (
    <li>
      <h1>title</h1>
      <img 
        src="https://media.wired.com/photos/60f081b4c147fe7a1a367362/191:100/w_1280,c_limit/Business-Autonomous-Vehicles-Supercomputers-1201885684.jpg"/>
      <h2>author</h2>
      <h2>source</h2>
      <h3>asdfasdfasdf</h3>
      <p>asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</p>
      <p>url</p>
      <p>today</p>
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

{/* <li>
      <h1>{title}</h1>
      <image>{image}</image>
      <h2>{author}</h2>
      <h2>{source}</h2>
      <h3>{description}</h3>
      <p>{content}</p>
      <p>{url}</p>
      <p>{publishedAt}</p>
    </li> */}
