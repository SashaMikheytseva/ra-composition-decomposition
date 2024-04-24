

/**
 * отображает единицу валюты, нефти
 */

export interface ICurrency {
    currency: string,
    value: string,
    changes: string
}

export const CurrencyWidjetItem = ({currency, value, changes}: ICurrency) => {
  return (
    <div className="currency-item">
        <span>{currency}</span>
        <span>{value}</span>
        <span>{changes}</span>
    </div>
  )
}
