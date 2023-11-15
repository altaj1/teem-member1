import React, { useState } from 'react';
import './sUsres.css'

const Usres = (props) => {
    console.log(props.user)
    const{email, gender, id, name, phone, picture} = props.us;
    const addMember = props.addMember;
    const [mobile, setMobile] = useState(' ')
    const showPhone = () =>setMobile(phone)
    return(
        <div className='body' > 
           <div className='pic'>
           <h1> <img src={picture.large} alt="" /></h1>
           </div>
           <div className="details">
            <h3>Name: {name.first+' '+name.last}</h3>
            <p>ID: {id.name}</p>
            <p> ID Value: {id.value}</p>
            <p>Email: {email}</p>
            <p>Gender: {gender}</p>
            <p>Phone:{mobile}</p>
            <button onClick={showPhone}>Show-number</button>
            <button onClick={()=> addMember(name.first+' '+name.last)}> Add me</button>
        </div>
    </div>
    );
};

export default Usres;
