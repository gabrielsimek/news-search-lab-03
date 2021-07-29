const URL_TOP_COUNTRIES = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}
`;

const fetchTopArticles = async () => {
  const res = await fetch(URL_TOP_COUNTRIES);
  const json = await res.json();
  return json;

};

export default fetchTopArticles;
