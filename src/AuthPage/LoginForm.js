import React, { useState, useContext } from 'react'
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";
import { Context, useAuth } from '../functions/context';
import axios from 'axios';

const LoginForm = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [user,setUser] = useState({});
  const userData = (record) => {
    if(record)
    {
      sessionStorage.setItem('token',record.access_token);
      sessionStorage.setItem('user',JSON.stringify(record));
      setUser(record);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
        email:email,
        password:password
    }
    const res = axios.post("http://localhost:8080/login",data).then((res)=>userData(res.data.data)).catch((err)=>console.error(err));
  }
  return (
    <>
        <div className="form-title">Welcome Back</div>

        <div className="form-subtitle">
            New here? <Link onClick={() => props.onHasNoAccount()}>Sign Up</Link>
        </div>

        <form onSubmit={onSubmit}>
            <TextInput
            label="Email"
            name="email"
            placeholder="adam@lamorre.co"
            onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
            label="Password"
            name="password"
            placeholder="********"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Log In</Button>
        </form>
    </>
  )
}

export default LoginForm