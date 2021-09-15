import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
    const [ {basket,user} ,dispatch]=useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        
    
        <div className="header">
        <Link to="/">
        <img className="header_logo" src="./image/images.png" alt="temporsry" />
        </Link>
         
       
        <div className="header_search">
        <input type="text" className="header_searchinput" placeholder="Search with amazon clone" />
        {/* <img src="./image/2.png" />  */}
            <SearchIcon className="header_searchicon" />
        </div>
            <div className="header_nav">
            <Link to={!user && '/login'} >

            <div  onClick={handleAuthentication}
            className="header_option">
                <span className="header_optionlineone">{!user ? 'Guest' :user.email}</span>
                <span className="header_optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionlineone">Returns</span>
                <span className="header_optionlinetwo">& Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionlineone">Your</span>
                <span className="header_optionlinetwo">Prime</span>
                <span className="header_optionlinetwo">Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header_optionbasket">
                <ShoppingBasketIcon />
                <span className="header_optionlinetwo  header_basketcount">{basket?.length}</span>
            </div>
            </Link>
            

            </div>
        </div>
        
    )
}

export default Header;
