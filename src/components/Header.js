import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import { useStateValue } from '../contextAPI/StateProvider';

function Header() {
    const [{basket},] = useStateValue();

    return (
        <nav className='header'>
            <Link to='/'>
                <div className="img__container">
                    <img  
                    className="header__logo"
                    src='/logo.png'
                    alt="logo"
                    />
                </div>
            </Link>
            <Link to='/' >
                <h2 className='header__text'>Grandma's Meal</h2>     
            </Link>
            <div className="header__last">
            <Link to='/contact'>
                <EmailIcon className='icon'/>       
            </Link>
            <Link to='/checkout' style={{textDecoration: 'none'}}>
                <div className="header__checkout">
                    <ShoppingCartIcon className='icon' />
                    <span>{basket?.length || 0 }</span>
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header

