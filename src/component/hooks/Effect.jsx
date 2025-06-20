import React, { useEffect, useState } from 'react'

const State = () => {
    //const [count, setCount] = useState(0);
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUser(data))
    })

    //useEffect(()=>{
        /*setTimeout(() => {
            setCount(count + 0);
        },1000)
        console.log("UseEffect Rendered");
    },[count])*/


    // const handleincrement = () => {
    //     setCount(count + 1);
    // }
    // const handledecrement = () => {
    //     setCount(count - 1);
    // }
    // const handleReset = () => {
    //     setCount(0);
    // }

  return (
    /*<div>
      <h1>{count}</h1>
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>*/
      <div>
      <ol>
        {user.map((data)=>(
            <>
            <hr></hr>
            <p>S.No : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Address : {data.address.street}, {data.address.city}</p>
            <p>Phone : {data.phone}</p>
            <p>Website : {data.website}</p>
            <p>Company : {data.company.name}</p>
            <p></p>
            </>
        ))}
      </ol>
    </div>
  )
}

export default State