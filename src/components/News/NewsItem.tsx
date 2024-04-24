/**
 * отображает одну новость
 */

export interface INewsItem {
    logo: string,
    title: string,
    link: string
}

export const NewsItem = ({item}: {item: INewsItem}) => {
  const {logo, title, link} = item;  
  return (
    <div className="news-item">
        <img src={logo} alt="Logo" className="news-logo"/>
        <a href={link}>
        <h3 className="news-title">{title}</h3>
        </a>
    </div>
  )
}
