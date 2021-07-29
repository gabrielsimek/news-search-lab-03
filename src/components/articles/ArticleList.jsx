import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

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
      source: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,  
    })
  )
};

export default ArticleList;
