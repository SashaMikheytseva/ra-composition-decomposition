/**
 * отображает блок валют, нефти
 */
import { CurrencyWidjetItem, ICurrency } from "./CurrencyWidjetItem";


export interface ICurrencyWidjet {
    items: ICurrency[]
}

export const CurrencyWidjet = ({items}: ICurrencyWidjet) => {
  return (
    <div className="currency-widget">
        {items.map((item) => 
            
                <CurrencyWidjetItem 
                currency={item.currency}
                value={item.value}
                changes={item.changes}
                />
        )}
    </div>
  )
}
