/**
 * отображает один из разделов новостей
 */

export interface ITitles {
    title: string,
    link: string
}

export const InlineTitle = ({title, link}: ITitles) => {
  return (
    <li className="inline-title">
        <a href={link}><h2>{title}</h2></a>
    </li>
  )
}
