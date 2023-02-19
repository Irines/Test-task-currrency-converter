import { TextField } from "@mui/material";
import {ReactComponent as EditIcon} from "../assets/images/edit.svg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {useState, useEffect} from 'react';
import "../styles/currency-table.sass"
import EditableField from "./EditableField";
import { CurrencyObj } from "../interfaces/currency-data";

interface RowData {
    value: CurrencyObj;
    key: string;
}

function TableRow({value, key}:RowData) {

    return (  
        <div className="row" key={key}>
            <div className="cell currency-col"><div>{`${value.ccy}/${value.base_ccy}`}</div></div>
                <div className="cell">
                    <div className="cell__content">
                        <EditableField 
                            value={value.buy} 
                            // setFieldValue={setFieldValueBuy}
                        />
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__content">
                        <EditableField 
                            value={value.sale}
                            // setFieldValue={setFieldValueSell}
                        />
                </div>
            </div>
        </div> 
    );
}

export default TableRow;