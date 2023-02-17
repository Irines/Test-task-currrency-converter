import TextField from "@mui/material/TextField";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import './../styles/converter.sass';
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent, useState } from "react";

const currencyData = [
    { ccy: "EUR", base_ccy: "UAH", buy: "41.15000", sale: "42.15000" },
    { ccy: "USD", base_ccy: "UAH", buy: "39.10000", sale: "39.60000" },
    { ccy: "USD", base_ccy: "EUR", buy: "0.9328", sale: "0.9488" },
];

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
        value: 'UAH',
        label: '₴'
    },
    {
      value: 'BTC',
      label: '฿',
    },
    // {
    //   value: 'JPY',
    //   label: '¥',
    // },
  ];

function Converter() {
    const [changeValue, setChangeValue] = useState<number | string>('')
    const [getValue, setGetValue] = useState<number | string>('')
    const [currency, setCurrency] = useState('EUR')
    const [getCurrency, setGetCurrency] = useState('USD')

    const handleReverseCurrency = () => {
        setChangeValue(getValue)
        setGetValue(changeValue)
        setCurrency(getCurrency)
        setGetCurrency(currency)
    }

    const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>): void => {
        const newVal = (e.target.value)
        setChangeValue(newVal)
    }

    const handleChangeGet = (e: ChangeEvent<HTMLInputElement>): void => {
        const newVal = (e.target.value)
        setGetValue(newVal)
    }

    const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>): void => {
        const newVal = (e.target.value)
        setCurrency(newVal)
    }

    const handleChangeGetCurrency = (e: ChangeEvent<HTMLInputElement>): void => {
        const newVal = (e.target.value)
        setGetCurrency(newVal)
    }

    // const toNumber = (value: string | number) => {
    //     if (typeof value === 'number') return value
    //     return parseInt(value.replace(/[^\d]+/g, ''))
    // }
    
    // const formatPrice = (price: string | number) => {
    //   return new Intl.NumberFormat('es-PY').format(toNumber(price))
    // }

    return ( 
        <div className="converter-container">
            <div className="change input">
                <TextField 
                    id="outlined-name"
                    label="Change"
                    autoComplete='off'
                    value={changeValue}
                    onChange={handleChangeAmount}
                    // onBlur={e => {
                    //     const numberValue = toNumber(e.target.value)
                    //     setChangeValue(numberValue)
                    //     e.target.value = formatPrice(numberValue)
                    // }}
                    // onClick={handleFieldClick}
                    // onMouseEnter={e => setShowEdit(!showIcons)}
                    // onMouseLeave={e => setShowEdit(false)}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChangeCurrency}
                    defaultValue="EUR"
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="icon-container" onClick={handleReverseCurrency}>
                <SyncAltIcon sx={{ fontSize: 50, fill:"#95d0ff" }}/>
            </div>
            <div className="get input">
                <TextField
                    id="outlined-name"
                    label="Get"
                    autoComplete='off'
                    value={getValue}
                    onChange={handleChangeGet}
                    // onClick={handleFieldClick}
                    // onMouseEnter={e => setShowEdit(!showIcons)}
                    // onMouseLeave={e => setShowEdit(false)}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    value={getCurrency}
                    onChange={handleChangeGetCurrency}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </div>
    );
}

export default Converter;