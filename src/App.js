// import React from 'react';
import React,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from'./Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
 
const promise = loadStripe('pk_test_51JX7tLEATnz1gOFDn9XKeaCkoElgsR47GBhlqulGs8FxGsQ7joGSV92YTGygqEDGOh1SttpHqIW0xoqySuTPbvti00ijsnPZLg');
function App(){
  const [{},dispatch]= useStateValue();
  useEffect(()=>{

auth.onAuthStateChanged(authUser =>{
  console.log('THE USER IS >>> ',authUser);
  if(authUser){
    //the user just login
    dispatch({
      type:'SET_USER',
      user: authUser
    })
  }else{
//the user is logout
dispatch({
  type:'SET_USER',
  user:null
})
  }
})
  },[])
  return(
    <>
    <Router>
    <div className="App">
    <Switch>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/checkout">
    <Header />
    <Checkout />
      
    </Route>
    <Route path="/payment">
    <Header />
    <Elements stripe={promise}>
    <Payment />
    </Elements>
    </Route>
    <Route path="/">
    <Header />
    <Home />
    </Route>
    
    </Switch>
    </div>
    
    </Router>
    </>
  )
}
export default App;