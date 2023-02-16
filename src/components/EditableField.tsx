// import { TextField } from "@mui/material";
// function EditableField() {
//     return (  
//         <>
//             <TextField
//                 fullWidth 
//                 id="outlined-name"
//                 // label="Name"
//                 autoComplete='off'
//                 value={fieldValue}
//                 onChange={e => setFieldValue(e.target.value)}
//                 onClick={e => setShowIcons(true)}
//                 onMouseEnter={e => setShowEdit(!showIcons)}
//                 onMouseLeave={e => setShowEdit(false)}
//                 sx={{
//                     borderColor: 'white', 
//                     "& fieldset": { borderColor: 'white' }, 
//                     "& .MuiOutlinedInput-root:hover": {
//                         "& > fieldset": {
//                         borderColor: 'white'
//                         }
//                     },
//                     "& .MuiOutlinedInput-root.Mui-focused": {
//                         "& > fieldset": {
//                         borderColor: "#1976d2"
//                     }
//                 } 
//                 }}
//             />
//             {
//                 showEdit ?
//                     <EditIcon className="icon"/>
//                 : 
//                 <></>
//             }
//             {
//                 showIcons ?
//                 <div className="helpIcons">
//                     <CheckCircleIcon sx={{ fill: '#1976d2'}}/>
//                     <CancelIcon sx={{ fill: '#1976d2'}}/>
//                 </div>
//                 :
//                 <></>
//             }
//         </>
//     );
// }

// export default EditableField;