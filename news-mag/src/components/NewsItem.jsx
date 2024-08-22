import news from '../assets/news.jpeg'

function NewsItem({title, image, desc, url}) {
  return (
    <>
      <div className="card bg-dark text-light  mx-3 my-3 px-2 py-2 d-inline-block" style={{maxWidth: '345px'}}>
        <img src={news} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>

  )
}

export default NewsItem
