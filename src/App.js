import { useEffect, useState } from 'react';
import './App.css';
import Usres from './componets/users/Usres';


function App() {
  const [users, setUsers] = useState([]);
  const [member, setMember] = useState([]);
  useEffect (()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(src=>src.json())
    .then(data =>setUsers(data.results))
  },[])
  const addMember = (name) => {
          setMember([...member, name])
 }

  return (
    <div className="App">
      <ul>
        {
          
            member.map((m, idx)=> <li key = {idx}>{m}</li>)
          
        }
      </ul>
     
      {
        users.map(user=> <Usres us={user} addMember={addMember}></Usres>)
      }
    </div>
  );
}

export default App;
