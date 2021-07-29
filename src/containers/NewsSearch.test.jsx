import React from 'react';
import { fireEvent,  render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import Search from '../components/search/Search';
import userEvent from '@testing-library/user-event';
jest.mock('../services/newsSearchApi', () => ({
  fetchTopArticles: () => [{ 
    source: 'asdf',
    author: 'asdf',
    title: 'asdf',
    description: 'asdf',
    url: 'asdf',
    image: 'asdf',
    publishedAt: 'asddf'
  }]
  
}));
describe('NewsSearch Container', () => {
  it('renders NewsSearch', async () => {
    userEvent;
    const handleSearchChange = jest.fn();
    const handleSearchSubmit = jest.fn();
    render(<NewsSearch/>);
    // screen.getByText('Loading...');
    // await screen.findByRole('list');
    const { queryByPlaceholderText } = render(<Search onSearchChange={handleSearchChange} onSubmit={handleSearchSubmit} search="bitcoin"/>);
    const searchInput = queryByPlaceholderText('search');
    fireEvent.change(searchInput, { target: { value: 'bitcoin' } });
    expect(searchInput.value).toBe('bitcoin');
    const submitButton = screen.getByTestId('search-button');
    userEvent.click(submitButton);
    expect(handleSearchSubmit).toBeCalledTimes(1);
  
  });
});
