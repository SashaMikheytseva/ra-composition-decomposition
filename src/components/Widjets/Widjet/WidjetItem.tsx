/**
 * общий тип для виджетов, находящихся в футере.
 */

import { ReactNode } from "react";

export interface IWidjet {
    img?: string,
    title: string,
    children?: ReactNode,
    content?: string,
    link: string,
}

export const WidjetItem = ({
  title,
  link,
  children
}: IWidjet) => {
  return (
    <div className="widget-item">
        <a href={link}><h2 className="widget-item-title">{title}</h2></a>
        <div className="widget-item-content">
            {children}
        </div>
    </div>
  )
}
