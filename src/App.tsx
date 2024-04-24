import { News } from './components/News/News';
import { InlineTitles } from './components/News/InlineTitles';
import { Banner } from './components/Banner/Banner';
import { PromoBanner } from './components/Banner/PromoBanner';
import { CurrencyWidjet } from './components/Currency/CurrencyWidjet';
import { Search } from './components/Searching/Search';
import { Weather } from './components/Widjets/WeatherWidjet/Weather';
import { WidjetItem } from './components/Widjets/Widjet/WidjetItem';
import { news  } from './data/articles';
import { banner } from './data/banner';
import { weather } from './data/weather';
import { currencies } from './data/currencies';
import { tags } from './data/searchTags';
import { inlines } from './data/inlinesTitles';
import { promo } from './data/promo';
import './App.css'

function App() {
  

  return (
    <div className='App'>
      <div className="header">
        <div className='news'>
          <InlineTitles items={inlines} />
          <News items={news} />
          <CurrencyWidjet items={currencies} />
        </div>
        
        <Banner logo={banner.logo} link={banner.link} title={banner.title} content={banner.content} />
        
      </div>
      <Search items={tags} />
      <PromoBanner img={promo.img} link={promo.link} />

      <div className="footer">
        <Weather title={weather.title} link={weather.link} img={weather.img} breafInfo={weather.breafInfo} info={weather.info} />
        
        <WidjetItem title='Посещаемое' link='#'>
          <p><a>Недвижимость</a> - о сталинках</p>
          <p><a>Маркет</a> - люстры и светильники</p>
          <p><a>Авто.ру</a> - привод 4х4 до 500 000</p>
        </WidjetItem>

        <WidjetItem title='Посещаемое' link='#'>
          <ul>
            <li>02:20 THT.Best <a>THT International</a></li>
            <li>02:15 Джинглики <a>Карусель INT</a></li>
            <li>02:25 Наедине со всеми <a>Первый</a></li>
          </ul>
        </WidjetItem>
        
      </div>
    </div>
  )
}

export default App
