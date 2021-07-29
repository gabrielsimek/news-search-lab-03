import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';

export default class NewsSearch extends Component {
    state = {
      articles: []
    }

    render() {
      return (
        <>
          <ArticleList/>
        </>
      );
    }
}
