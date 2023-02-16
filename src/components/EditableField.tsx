import { TextField } from "@mui/material";
import {ReactComponent as EditIcon} from "../assets/images/edit.svg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect, ChangeEvent } from "react";
import "../styles/currency-table.sass"

interface FieldProps {
    value: string
}

function EditableField({value} : FieldProps) {
        const [initialValue, setInitialValue] = useState(value)
        const [fieldValue, setFieldValue] = useState(value)
        const [showIcons, setShowIcons] = useState(false)
        const [showEdit, setShowEdit] = useState(false)
        const [valid, setValid] = useState(true)

        useEffect(() => {
            setFieldValue(value);
            setInitialValue(value);
        }, [value]);

        const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
            console.log("handelChange")
            const newVal = (e.target.value)
            if (Number(newVal) < Number(initialValue)*1.1 && Number(newVal) > Number(initialValue) * 0.9 ) {
                setValid(true)
            } else {
                setValid(false)
            }
            setFieldValue(newVal)
        }

        const handleReset = () => {
            setFieldValue(initialValue)
            setValid(true)
            setShowIcons(false)
            setShowEdit(false)
        }

        const handleSubmit = () => {
            // request to server
            setShowIcons(false)
            setShowEdit(false)
        }

    return (  
        <>
            {
                valid
                ?
                <TextField
                    fullWidth 
                    id="outlined-name"
                    // label="Name"
                    autoComplete='off'
                    value={fieldValue}
                    onChange={handleChange}
                    onClick={e => setShowIcons(true)}
                    onMouseEnter={e => setShowEdit(!showIcons)}
                    onMouseLeave={e => setShowEdit(false)}
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
                :
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Must be +- 10%."
                    value={fieldValue}
                    onChange={handleChange}
                    // helperText="Must be +- 10%."
              />
            }
            
            {
                showEdit ?
                    <EditIcon className="icon"/>
                : 
                <></>
            }
            {
                showIcons ?
                <div className="helpIcons">
                    {valid ? <div onClick={handleSubmit}><CheckCircleIcon sx={{ fill: '#1976d2'}}/></div> : <CheckCircleIcon sx={{ fill: '#b5b5b5'}}/>}
                    <div onClick={handleReset}><CancelIcon sx={{ fill: '#1976d2'}}/></div>
                </div>
                :
                <></>
            }
        </>
    );
}

export default EditableField;