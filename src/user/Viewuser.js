import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Viewuser = () => {
    const [user,setuser]=useState({
        name:"",
        username:"",
        email:""
    })
    const{id}=useParams();

    useEffect(()=>{
            loaduser();
    },[])
    const loaduser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setuser(result.data)
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow "}>
                    <h2 className={"text-center m-4 "}>Student Details</h2>
                    <div className={"card"}>
                        <div className={"card-header"}>
                            Details of Student id :
                            <ul className={"list-group list-group-flush"}>
                                <li className={"list-group-item"}>
                                    <b className={"font-bold underline"}>Name:        </b>
                                    {user.name}
                                </li>
                                <li className={"list-group-item"}>
                                    <b className={"font-bold underline"}>Username:        </b>
                                    {user.username}
                                </li>
                                <li className={"list-group-item "}>
                                    <b className={"font-bold underline"}>E-mail:      </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                        <Link className={"btn btn-primary my-2"} to={"/"}>Back To Home...</Link>
                </div>
            </div>
        </div>
    )
}
export default Viewuser
