import { NewsItem, INewsItem } from "./NewsItem";

/**
 * отображает блок новостей
 */
export interface INews {
    items: INewsItem[]
}
export const News = ({items}: INews) => {
  return (
    <>
        <div className="news-block">
            {items.map((item) =>
                <NewsItem item={item} />
            )}
        </div>
    </>
    
  )
}
