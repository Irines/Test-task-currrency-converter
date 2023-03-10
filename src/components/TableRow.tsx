import { useState, useEffect } from "react";
import "../styles/currency-table.sass";
import EditableField from "./EditableField";
import { CurrencyObj } from "../interfaces/currency-data";

interface RowData {
  value: CurrencyObj;
}

function TableRow({ value }: RowData) {
  return (
    <div className="row">
      <div className="cell currency-col">
        <div>{`${value.ccy}/${value.base_ccy}`}</div>
      </div>
      <div className="cell">
        <div className="cell__content">
          <EditableField value={value.buy} type="buy" currencyRowObj={value} />
        </div>
      </div>
      <div className="cell">
        <div className="cell__content">
          <EditableField
            value={value.sale}
            type="sale"
            currencyRowObj={value}
          />
        </div>
      </div>
    </div>
  );
}

export default TableRow;
