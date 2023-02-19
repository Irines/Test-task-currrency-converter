export interface CurrencyObj { 
    id: string;
    ccy: string; 
    base_ccy: string; 
    buy: string; 
    sale: string; 
}

export interface CurrencyContextType {
    currencyData: CurrencyObj[];
    setCurrencyData: (currencyData: CurrencyObj[]) => void;
}