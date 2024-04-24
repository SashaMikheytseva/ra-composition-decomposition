/**
 * отображает баннер, ведущий на один из сервисов Яндекс
 */
export interface IBanner {
    logo: string,
    title: string,
    content: string, 
    link: string
}

export const Banner = ({logo, title, content, link}: IBanner) => {
  return (
    <div className="banner">
        <img src={logo} alt="Logo" className="banner-logo"/>
        <a href={link}>
        <h2 className="banner-title">{title}</h2>
        </a>
        <p>{content}</p>
    </div>
  )
}
