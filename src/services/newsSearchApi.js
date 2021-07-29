import mungeArticles from '../utils/mungeArticles';
const URL_TOP_COUNTRIES = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;


const fetchTopArticles = async () => {
  const res = await fetch(URL_TOP_COUNTRIES);
  const json = await res.json();
  return mungeArticles(json);
};

const fetchBySearchTerm = async (searchTerm) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`);
  const json = await res.json();
  return mungeArticles(json);
};

export  { fetchTopArticles, fetchBySearchTerm };
