import { TextField } from "@mui/material";
import {ReactComponent as EditIcon} from "../assets/images/edit.svg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {useState, useEffect} from 'react';
import "../styles/currency-table.sass"

interface RowData {
    value: {ccy: string, base_ccy:string, buy:string, sale:string};
    key: string;
}

function TableRow({value, key}:RowData) {
    const [fieldValueBuy, setFieldValueBuy] = useState(value.buy);
    const [fieldValueSell, setFieldValueSell] = useState(value.sale);
    const [showIconsBuy, setShowIconsBuy] = useState(false)
    const [showIconsSell, setShowIconsSell] = useState(false)
    const [showEditBuy, setShowEditBuy] = useState(false)
    const [showEditSell, setShowEditSell] = useState(false)

    useEffect(() => {
        setFieldValueBuy(value.buy);
        setFieldValueSell(value.sale);
    }, [value]);

    return (  
        <div className="row" key={key}>
            <div className="cell currency-col"><div>{`${value.ccy}/${value.base_ccy}`}</div></div>
                <div className="cell">
                    <div className="cell__content">
                        <TextField
                            fullWidth 
                            id="outlined-name"
                            // label="Name"
                            autoComplete='off'
                            value={fieldValueBuy}
                            onChange={e => setFieldValueBuy(e.target.value)}
                            onClick={e => setShowIconsBuy(true)}
                            onMouseEnter={e => setShowEditBuy(!showIconsBuy)}
                            onMouseLeave={e => setShowEditBuy(false)}
                            sx={{
                                borderColor: 'white', 
                                "& fieldset": { borderColor: 'white' }, 
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                    borderColor: 'white'
                                    }
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                    borderColor: "#1976d2"
                                }
                            } 
                            }}
                        />
                        {
                            showEditBuy ?
                                <EditIcon className="icon"/>
                            : 
                            <></>
                        }
                        {
                            showIconsBuy ?
                            <div className="helpIcons">
                                <CheckCircleIcon sx={{ fill: '#1976d2'}}/>
                                <CancelIcon sx={{ fill: '#1976d2'}}/>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div className="cell">
                    <div className="cell__content">
                        <TextField
                            fullWidth 
                            id="outlined-name"
                            // label="Name"
                            autoComplete='off'
                            value={fieldValueSell}
                            onChange={e => setFieldValueSell(e.target.value)}
                            onClick={e => setShowIconsSell(true)}
                            onMouseEnter={e => setShowEditSell(!showIconsSell)}
                            onMouseLeave={e => setShowEditSell(false)}
                            sx={{
                                borderColor: 'white', 
                                "& fieldset": { borderColor: 'white' }, 
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                    borderColor: 'white'
                                    }
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                    borderColor: "#1976d2"
                                }
                            } 
                            }}
                        />
                        {
                            showEditSell ?
                                <EditIcon className="icon"/>
                            : 
                            <></>
                        }
                        {
                            showIconsSell ?
                            <div className="helpIcons">
                                <CheckCircleIcon/>
                                <CancelIcon/>
                            </div>
                            :
                            <></>
                        }
                </div>
            </div>
        </div> 
    );
}

export default TableRow;