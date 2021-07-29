import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import fetchTopArticles  from '../services/newsSearchApi';
export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true,
      search: ''
    }
    async componentDidMount() {
      const articles = await fetchTopArticles();
      this.setState({ articles, loading: false });
    
    }
    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }
    render() {
      const { articles, loading, search } = this.state;
      if(loading) return <h1>Loading...</h1>;
      return (
        <>
          <Search onSearchChange={this.handleSearchChange} search={search}/>
          <ArticleList articles={articles}/>
        </>
      );
    }
}
