import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  const articleItems = articles.map(article => {
    return (
      <Article
        key={article.title}
        {...article}
      />
    );
  });
  return <ul>{articleItems}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
      publishedAt: PropTypes.string
    })
  )
};

export default ArticleList;
