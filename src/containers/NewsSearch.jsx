import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Paging from '../components/paging/Paging';
import Search from '../components/search/Search';
import { fetchTopArticles, fetchBySearchTerm, fetchByPage }  from '../services/newsSearchApi';
export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: true,
      search: '',
      page: 1
    }
    async componentDidMount() {
      const articles = await fetchTopArticles();
      this.setState({ articles, loading: false });
    
    }
    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSearchSubmit = async (e) => {
      e.preventDefault();
      const { search } = this.state;
      this.setState({ loading: true, page: 1 });
      if(!search) {
        this.setState({ loading: false });
        return;
      } 

      const articles = await fetchBySearchTerm(this.state.search);
      this.setState({ articles, loading: false });
    }

    handlePageChange = async (page) => {
      this.setState({ page: (this.state.page + page) }, async () => {
        const articles = await fetchByPage(this.state.search, this.state.page);
        this.setState({ articles });
      });
      
     
    };

    render() {
      const { articles, loading, search, page } = this.state;
      if(loading) return <h1>Loading...</h1>;
      return (
        <>
          
          <Search 
            search={search}
            onSearchChange={this.handleSearchChange} 
            onSubmit={this.handleSearchSubmit}  
          />
          <Paging page={page} search={search} onChange={this.handlePageChange}/>
          {articles.length > 1 ? <ArticleList articles={articles}/> : <h1>Nothing Found</h1>}
        </>
      );
    }
}
