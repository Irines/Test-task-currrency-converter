import "../styles/currency-table.sass"
import {useState} from 'react';
import TableRow from "./TableRow";


function CurrencyTable() {
    const [data, editData] = useState(
        [{"ccy":"EUR","base_ccy":"UAH","buy":"41.15000","sale":"42.15000"},{"ccy":"USD","base_ccy":"UAH","buy":"39.10000","sale":"39.60000"}]
    )
    return (  
        <div className="table-container">
            <div className="table">
                <div className="table-header">
                    <div className="row">
                        <div className="cell hd-cell"><div>Currency</div></div>
                        <div className="cell hd-cell"><div>Buy</div></div>
                        <div className="cell hd-cell"><div>Sell</div></div>
                    </div>
                </div>
                <div className="table-body">
                    {
                        data.map((value, index) => (
                            console.log("DATA", data),
                            <TableRow value={value} key={`row_${index}`}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CurrencyTable;