import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 325,
    height: 400,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function Students() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])

    const handleClick=(e)=> {
        e.preventDefault()
        const student = {name, address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{method:"POST", headers:{"Content-Type":"application/json"},body:JSON.stringify(student)})
            .then(()=>{console.log("New Student added")})
    }
    useEffect(()=>{
        fetch("http://localhost:8080/student/getall")
            .then(res=>res.json())
            .then((result)=>{
                    setStudents(result);
                }
            )
    },[])

    return (
        <div>
            <div>
                <Paper elevation={3} style={paperStyle}>
                    <h1 style={{color:"blue"}}  className={"text-center"}><u>Add Student</u></h1>
                    <br/>

                    <form  noValidate autoComplete="off" className={" grid grid-rows-0.1 gap-4"}>

                        <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                                   value={name}
                                   onChange={(e)=>setName(e.target.value)}
                        />
                        <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
                                   value={address}
                                   onChange={(e)=>setAddress(e.target.value)}
                        />
                        <Button variant="contained" color="secondary" onClick={handleClick}>
                            Submit
                        </Button>
                    </form>

                </Paper>
            </div>

            <div>
                <h1 className={"text-3xl text-center"}>Students</h1>

            <Paper elevation={3} style={paperStyle}>

                {students.map(student=>(
                <Paper elevation={6} style={{margin:"15px",padding:"15px", textAlign:"left"}} key={student.id}>
                    Id:{student.id}<br/>
                    Name:{student.name}<br/>
                    Address:{student.address}
                </Paper>
                ))}

            </Paper>
            </div>
        </div>
    );
}

