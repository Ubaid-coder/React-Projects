import { useEffect, useState } from "react"
import NewsItem from './NewsItem.jsx'

function NewsBoard({ category }) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0a65b126255344aa90e94c121ab86e77`;
    fetch(url)
      .then(response => response.json()).then(data => setArticles(data.articles))
  }, [category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((article, index) => {
        return (
          <NewsItem
            key={index}
            title={article.title}
            desc={article.description}
            image={article.urlToImage}
            url={article.url}
          />
        )
      })}
    </div>
  )
}

export default NewsBoard
