/**
 * отображает виджет с прогнозом погоды
 */


export interface IWeather {
    title: string,
    img: string,
    breafInfo: string,
    info: string,
    link: string
}

export const Weather = ({title, img, breafInfo, info, link}: IWeather) => {
  return (
    <div className="weather-widget">
      <div className="title-weather">
        <a href={link}><h2 className="title">{title}</h2></a>
      </div>
      <div className="text-weather">
        <img src={img} alt="weather" />
        <div className="breafInfo">{breafInfo}</div>
        <div className="info">{info}</div>
      </div>
    </div>
  );
}
