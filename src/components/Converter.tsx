import TextField from "@mui/material/TextField";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import "./../styles/converter.sass";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CurrencyContextType } from "../interfaces/currency-data";
import { CurrencyContext } from "../data-context";
import { rounded } from "../globalFuncs";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "UAH",
    label: "₴",
  },
  {
    value: "BTC",
    label: "฿",
  },
];

function Converter() {
  const [amountValue, setAmountValue] = useState<string>("");
  const [getValue, setGetValue] = useState<string>("");
  const [currency, setCurrency] = useState("EUR");
  const [getCurrency, setGetCurrency] = useState("USD");
  const [isValid, setValid] = useState(true);
  const { currencyData, setCurrencyData } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  useEffect(() => {
    if (isValid && currencyData.length && amountValue) {
      let val = parseFloat(amountValue.replace(/,/g, "."));
      convertCurrency(currency, getCurrency, Number(val));
    }
  }, [currency, amountValue, getCurrency, currencyData]);

  const handleReverseCurrency = () => {
    setAmountValue(rounded(getValue));
    setGetValue(amountValue);
    setCurrency(getCurrency);
    setGetCurrency(currency);
  };

  const convertCurrency = (
    currency: string,
    getCurrency: string,
    amount: number
  ) => {
    let computedValue = 0;
    if (currency === getCurrency) {
        computedValue = amount;
    } else {
      computedValue =
        (amount *
          Number(
            currencyData.filter((value) => value.ccy === currency)[0].buy
          )) /
        Number(
          currencyData.filter((value) => value.ccy === getCurrency)[0].sale
        );
    }
    setGetValue(String(computedValue.toFixed(5)));
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVal = e.target.value;
    setAmountValue(validation(newVal));
  };

  const handleChangeGet = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVal = e.target.value;
    setGetValue(newVal);
  };

  const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVal = e.target.value;
    setCurrency(newVal);
  };

  const handleChangeGetCurrency = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVal = e.target.value;
    setGetCurrency(newVal);
  };

  const validation = (value: string) => {
    if (typeof value === "string" && value.trim() === "") return "";
    if (/^\d+[\.\,]?\d*$/.test(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
    return value;
  };

  return (
    <div className="converter-container">
      <div className="change input">
        {isValid ? (
          <TextField
            id="outlined-name"
            label="Change"
            autoComplete="off"
            value={amountValue}
            onChange={handleChangeAmount}
          />
        ) : (
          <TextField
            error
            label="Enter only numbers and comma/dot"
            id="outlined-name"
            autoComplete="off"
            value={amountValue}
            onChange={handleChangeAmount}
          />
        )}
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
      {isValid ? (
        <div className="icon-container" onClick={handleReverseCurrency}>
          <SyncAltIcon sx={{ fontSize: 50, fill: "#95d0ff" }} />
        </div>
      ) : (
        <div className="icon-container">
          <SyncAltIcon
            sx={{ fontSize: 50, fill: "#ededed" }}
            style={{ cursor: "default" }}
          />
        </div>
      )}
      <div className="get input">
        <TextField
          id="outlined-name"
          label="Get"
          disabled
          autoComplete="off"
          value={rounded(getValue)}
          onChange={handleChangeGet}
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
