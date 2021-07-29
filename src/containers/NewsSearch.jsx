import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import fetchTopArticles  from '../services/newsSearchApi';
export default class NewsSearch extends Component {
    state = {
      articles: []
    }
    async componentDidMount() {
      const articles = await fetchTopArticles();
      this.setState(articles);
    }
    render() {
      return (
        <>
          {/* <ArticleList/> */}
        </>
      );
    }
}
