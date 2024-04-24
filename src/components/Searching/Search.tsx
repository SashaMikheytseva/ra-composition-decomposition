import { SearchItem, ISearchItem } from "./SearchItem";

export interface ISearch {
    items: ISearchItem[]
}

/**
 * отображает виджет поиска
 */
export const Search = ({items}: ISearch) => {
  return (
    <div className="search">
        <img src='https://whoiswho.obs.ru-moscow-1.hc.sbercloud.ru/images/company/6116/93005E05-57F2-439D-8034-04118DDAE566.jpg' className="search-logo" ></img>
        <div className="search-form">
          <div className="search-links">
            {items.map((item) =>
                <SearchItem name={item.name} link={item.link} />
            )}
          </div>
          <form className="search-form-input">
            <input className="search-input" type="text" />
            <button className="search-input-button">Найти</button>
          </form>
          <div className="search-sub-title">Найдётся всё...</div>
      </div>
    </div>
  )
}
