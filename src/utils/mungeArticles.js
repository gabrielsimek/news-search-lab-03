export default function mungeArticles(articles){
  return articles.articles.map(article => {
    return {
      source: article.source.name,
      author: article.author ? article.author : 'Unknown Author',
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      publishedAt: article.publishedAt
    };
  });
}
