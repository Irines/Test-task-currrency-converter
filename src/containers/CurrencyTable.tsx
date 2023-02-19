import "../styles/currency-table.sass";
import { useState, useEffect, useContext } from "react";
import TableRow from "../components/TableRow";
import axios from "axios";
import { CurrencyContextType, CurrencyObj } from "../interfaces/currency-data";
import { CurrencyContext } from "../data-context";

const currencyArr = [
  { id:"1", ccy: "EUR", base_ccy: "UAH", buy: "41.15000", sale: "42.15000" },
  { id:"2", ccy: "USD", base_ccy: "UAH", buy: "39.10000", sale: "39.60000" },
  { id:"3", ccy: "BTC", base_ccy: "UAH", buy: "963001", sale: "976986" },
  { id:"#", ccy: "UAH", base_ccy: "UAH", buy: "1", sale: "1" },
];

function CurrencyTable() {
  const [data, setData] = useState<CurrencyObj[]>([]);
  const { currencyData, setCurrencyData } = useContext(CurrencyContext) as CurrencyContextType;

  // the server doesn't have CORS header, so you are not allowed to get the response
  const fetchPost = async () => {
  // const response = await axios("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
  // setData(response.data)

    setData(currencyArr);
  };

  // update Context after fetch currency data for table
  useEffect(() => {
    setCurrencyData(currencyArr as CurrencyObj[])
  }, [data])

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
  }

  return (
    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <div className="row">
            <div className="cell hd-cell">
              <div>Currency</div>
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
          {data?.filter(object => object.id !== '#').map(
            (value, index) => (
              <TableRow value={value} key={`row_${index}`} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrencyTable;
