import React, {useState} from 'react'
import Paper from "@mui/material/Paper";
import {Box, Button, TextField} from "@mui/material";


export const Stu = () => {
    const paperStyle={padding:"50px 20px",width:325,height:325,margin:"20px auto"};
    const [name,setname]=useState("");
    const [address,setaddress]=useState("");
    const click = (e) => {
      e.preventDefault();
      const student={name,address};
      console.log(student)
        fetch("http://localhost:8080/student/add",{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added...")
        })


    }

    return (
    <div >
        <Paper elevation={3} style={paperStyle}>
               <div className={"content-center text-center gap-4" }>
                   <h2 className={"text-center font-bold text-2xl italic text-violet-600"}>Add Student</h2>
                   <Box
                       component="form"
                       sx={{
                           '& > :not(style)': { m: 1, width: '30ch' },
                       }}
                       noValidate
                       autoComplete="off"
                   >
                       <TextField id="standard-basic" label="Name" variant="standard" fullWidth
                                  value={name} onChange={(e)=>setname(e.target.value)}/>
                       <TextField id="standard-basic" label="Address" variant="standard" fullWidth
                                  value={address} onChange={(e)=>setaddress(e.target.value)}/>

                   </Box>
                   <div className={"text-center"}>
                       <Button variant="outlined" className={"italic "} onClick={click}>
                           SUBMIT
                       </Button>
                       <br/>
                       {name}
                       <br/>
                       {address}

                   </div>

               </div>
        </Paper>

    </div>
    )
}
