import "../styles/currency-table.sass";
import { useState, useEffect, useContext } from "react";
import TableRow from "../components/TableRow";
import axios from "axios";
import { CurrencyContextType, CurrencyObj } from "../interfaces/currency-data";
import { CurrencyContext } from "../data-context";
import { formatDate } from "../globalFuncs";

const currencyArr = [
  { id: "1", ccy: "EUR", base_ccy: "UAH", buy: "41.15000", sale: "42.15000" },
  { id: "2", ccy: "USD", base_ccy: "UAH", buy: "39.10000", sale: "39.60000" },
  { id: "3", ccy: "BTC", base_ccy: "UAH", buy: "963001", sale: "976986" },
  { id: "#", ccy: "UAH", base_ccy: "UAH", buy: "1", sale: "1" },
];

function CurrencyTable() {
  const { currencyData, setCurrencyData } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  // the server doesn't have CORS header, so not allowed to get the response
  const fetchPost = async () => {
    // const response = await axios("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
    // setCurrencyData(response.data)

    setCurrencyData(currencyArr);
  };

  useEffect(() => {
    checkCounterAndFetch();
  }, []);

  const checkCounterAndFetch = () => {
    let counterKey = localStorage.getItem("counter") || 0;
    let counter = Number(counterKey);
    counter += 1;
    localStorage.setItem("counter", JSON.stringify(counter));
    if (counter > 0 && counter % 5 == 0) {
      localStorage.removeItem("counter");
      throw new Error("Server error. Please try later.");
    } else {
      fetchPost();
    }
  };

  return (
    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <div className="row">
            <div className="cell hd-cell">
              <div className="date-cell">
                <p>Currency</p>
                <p>{formatDate(new Date())}</p>
              </div>
            </div>
            <div className="cell hd-cell">
              <div>Buy</div>
            </div>
            <div className="cell hd-cell">
              <div>Sell</div>
            </div>
          </div>
        </div>
        <div className="table-body">
          {currencyData
            ?.filter((object) => object.id !== "#")
            .map((value, index) => (
              <TableRow value={value} key={`row_${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CurrencyTable;
