import React, {useState} from 'react'
import Button from "@mui/material/Button";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Adduser = () => {
    let navigate=useNavigate()
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });
    const {name,username,email}=user
    const oninputcharge = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
    }
    const onsubmit = async (e) => {
            e.preventDefault();
            await axios.post("http://localhost:8080/user",user)
        navigate("/");
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow "}>
                    <h2 className={"text-center m-4 "}> Register Student</h2>
                    <form onSubmit={(e)=>onsubmit(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor={"Name"} className={"form-label"}>
                                Name
                            </label>
                        <input type={"text"} className={"form-control"} placeholder="Enter Your Name" name="name" value={name}
                        onChange={(e)=>oninputcharge(e)}
                        />

                        </div>
                        <div className={"mb-3"}>
                        <label htmlFor={"Username"} className={"form-label"}>
                            Username
                        </label>
                        <input type={"text"} className={"form-control"} placeholder="Enter Your Username" name="username" value={username}
                               onChange={(e)=>oninputcharge(e)}/>
                        </div>
                        <div className={"mb-3"}>
                        <label htmlFor={"Email"} className={"form-label"}>
                            E-mail Id
                        </label>
                        <input type={"text"} className={"form-control"} placeholder="Enter Your Email Address" name="email" value={email}
                               onChange={(e)=>oninputcharge(e)}/>
                        </div>
                        <div className={"content-center text-center"}>
                        <button type={"Submit"} className={"btn btn-outline-primary"}>
                            Submit
                        </button>
                        <Link  className={"btn btn-outline-danger mx-2"} to={"/"}>
                            Cancel
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Adduser
