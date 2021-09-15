import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const signIn=e=>{
    e.preventDefault();
     auth
         .signInWithEmailAndPassword(email,password)
         .then(auth =>{
             history.push('/')
         })
         .catch(error=>alert(error.message))
    
    }


    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successful create a new user with email or password
            if (auth){
                history.push('/')
            }
        })
        .catch(error =>alert(error.message))

        // do some fancy firebase register...  
    }
    return (
        <div className='login'>
        <Link to='/'>
        <img 
        className="login_logo"
        src="./image/images.png" alt="temporsry" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>

                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button  type="submit"onClick={signIn}
                    className="login_signinbutton">Sign In</button>
                </form>
                <p>By sigin ypu agree with the fake amazon clone and agree with all the terms and policy!</p>
                <button onClick={register}
                className="login_registerbutton">Create your amazon clone</button>
            </div>
        </div>
    )
}

export default Login;
