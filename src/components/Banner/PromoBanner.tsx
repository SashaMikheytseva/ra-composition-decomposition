
export interface IPromo {
    img: string,
    link: string
}
export const PromoBanner = ({img, link}: IPromo) => {
  return (
    <div className="promo">
         <a href={link}>
            <img src={img} alt="promo" />
        </a>
    </div>
  )
}
