import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import fetchTopArticles  from '../services/newsSearchApi';
export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true
    }
    async componentDidMount() {
      const articles = await fetchTopArticles();
      this.setState({ articles, loading: false });
      console.log(articles);
    }
    render() {
      const { articles } = this.state;
    
      return (
        <>
          <ArticleList articles={articles}/>
        </>
      );
    }
}
