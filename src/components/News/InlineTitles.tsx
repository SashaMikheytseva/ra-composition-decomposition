/**
 * отображает разделы новостей
 */

import { InlineTitle, ITitles } from "./InlineTitle";

export interface ITitlesArr {
    items: ITitles[]
}

export const InlineTitles = ({items}: ITitlesArr) => {
  return (
    <nav className="nav">
        <ul className="nav-titles">
            {items.map((item) => <InlineTitle title={item.title} link={item.link} />)}
        </ul>
    </nav>
  )
}
