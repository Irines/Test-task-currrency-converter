import "../styles/currency-table.sass"
import {ReactComponent as EditIcon} from "../assets/images/edit.svg";
import { TextField } from "@mui/material";

function CurrencyTable() {
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
                <div className="row">
                    <div className="cell currency-col"><div>EUR/UAH</div></div>
                    <div className="cell">
                        <div className="cell__content">
                            {/* <p>27.5</p> */}
                            <TextField
                                fullWidth 
                                id="outlined-name"
                                // label="Name"
                                value={27.7}
                                // onChange={handleChange}
                            />
                            <EditIcon className="icon"/>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="cell__content">
                            <TextField
                                fullWidth 
                                id="outlined-name"
                                // label="Name"
                                value={27.7}
                                // onChange={handleChange}
                                sx={{border: 'none', "& fieldset": { border: 'none' }, }}
                                // InputProps={{
                                //         disableUnderline: true,
                                // }}
                            />
                            <EditIcon className="icon"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyTable;