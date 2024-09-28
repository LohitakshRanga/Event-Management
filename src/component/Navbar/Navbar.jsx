import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <Link to="/" ><img className='logo' src='https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721250235~exp=1721253835~hmac=43bb0811a25b54d73827ddb49b86f9d106fa831b59506538034476bd5e0ee5e2&w=740' alt='logo'/> </Link>
        

        <div className="tagLine">
            <p>Dedicated to creating flawless events that exceed expectations.</p>
        </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <ul>
                    <li><Link to='/'>PORTFOLIO</Link></li>
                    <li><Link to='/AboutUs'>ABOUT US</Link></li>
                    <li className="dropdown">
                        <Link to="#" className="dropbtn">SERVICE</Link>
                        <div className="dropdown-content">
                            <Link to="/Wedding">WEDDING</Link>
                            <Link to="/Events">EVENTS</Link>
                            <Link to="#">MONSOON SHEDS</Link>
                        </div>
                    </li>
                    <li><Link to='#'>CAREER</Link></li>
                    <li><Link to='/ContactUs'>CONTACT US</Link></li>
                </ul>

            </nav>

        </>
    )
}

export default Navbar