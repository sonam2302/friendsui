import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
export default function FriendsList() {
    const [users,setUsers] = useState([]);
    useEffect(()=> {
axios.get("https://dummyapi.io/data/v1/user?limit=30",
{
    headers:{
    'app-id':'65ed6788983f83c7614f267e '
}
    }
    ).then((res) => setUsers(res.data.data))
},[]);
  return (
    <div className="container">
        <div className='row'>
            {
            users.map(item =>
                <div className='col-md-3' key={item.id}>
                <div className="card mb-3">
  <img src={item.picture} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title} {item.firstName} {item.lastName}</h5>
    {/* <Link to="/profile" className="btn btn-primary">See Profile</Link> */}
    <Link to={`/profile/${item.id}`} className="btn btn-primary">See Profile</Link>

  </div>
</div>
                </div>


                 )
            }
            </div></div>
  )
}//we can see the state in compaonts tab in inspect using react dev tools 
