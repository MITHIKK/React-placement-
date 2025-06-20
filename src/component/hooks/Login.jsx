import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [formData,setFormdata] = useState({
        email: '',
        password: ''
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData)
        setFormdata({
            email:"",
            password:""
        })
    }
    const handleChange=(e) =>{
        setFormdata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Email : </label>
                <br />
                <input type="email" value={FormData.email} name='email' onChange={handleChange}></input>
                <label>Password : </label>
                <br />
                <input type="password" value={FormData.password} name='password' onChange={handleChange}></input>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login