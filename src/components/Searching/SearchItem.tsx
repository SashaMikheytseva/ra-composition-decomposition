/**
 * отображает один кликабельный заголовок поиска
 */
export interface ISearchItem {
    name: string,
    link: string
}

export const SearchItem = ({name, link}: ISearchItem) => {
  return (
      <a href={link}>{name}</a> 
  )
}
