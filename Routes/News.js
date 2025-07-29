import { NewsData } from "./NewsData";

export const News = () => {
  return (
    <div className="news-list">
  {NewsData.results.slice(0, 15).map(item => (
    <a
      key={item.article_id}
      href={item.link}
      className="news-card"
      target="_blank"
      rel="noreferrer"
    >
      <img src={item.image_url} alt={item.title} className="news-thumb" />
      <div className="news-info">
        <h4 className="news-title">{item.title}</h4>
        <span className="news-meta">
          {new Date(item.pubDate).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
          {" • "}
          {item.creator?.[0] ?? "Unknown"}
        </span>
      </div>
    </a>
  ))}
</div>


  )
}
