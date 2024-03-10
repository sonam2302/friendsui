import React,{useState, useEffect}from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
export default function Profile() {
    let {id} = useParams();
    //compilation 
    //if we dont add default value by default it will be null
    //during compilation time it will tell user can't be null or undefined
    //during run time there is no problem , 
    // const [user,setUser] = useState();//no defualt value so it will throw error to fix this add {}
    const [user,setUser] = useState({});
    useEffect(()=> {
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
                "app-id":"65ed6788983f83c7614f267e "
            }
        })
        .then((res)=> setUser(res.data))
    })
  return (
    <div className="container mt-4">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={user.picture} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user.title}{user.firstName}{user.lastName}</h5>
        <p className="card-text">
            {user.email}</p>
            <p className="card-text">
            {user.dateOfBirth}</p>
            <p className="card-text">
            {user.phone}</p>
        <p className="card-text"><small className="text-body-secondary">{user.registerDate}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
