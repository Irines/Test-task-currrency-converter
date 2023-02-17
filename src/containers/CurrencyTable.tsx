import "../styles/currency-table.sass";
import { useState, useEffect } from "react";
import TableRow from "../components/TableRow";
import axios from "axios";

const currencyData = [
  { ccy: "EUR", base_ccy: "UAH", buy: "41.15000", sale: "42.15000" },
  { ccy: "USD", base_ccy: "UAH", buy: "39.10000", sale: "39.60000" },
  { ccy: "BTC", base_ccy: "UAH", buy: "963001", sale: "976986" }
];

function CurrencyTable() {
  const [data, setData] = useState<
    { ccy: string; base_ccy: string; buy: string; sale: string }[]
  >([]);

  const fetchPost = async () => {
    // the server doesn't have CORS header, so you are not allowed to get the response
    // const response = await axios("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
    // setData(response.data)

    setData(currencyData);
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
          {data.map(
            (value, index) => (
              (<TableRow value={value} key={`row_${index}`} />)
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrencyTable;
