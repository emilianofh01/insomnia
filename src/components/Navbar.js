import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/InsomniaLogo.jpg'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul className="nav">
                    <li className="Navbar__Options"> <Link to="/">Inicio</Link></li>
                    <li className="Navbar__Options"> <Link to="/">Conocenos</Link></li>
                    <li className="Navbar__Options"> <Link to="/">Tienda</Link></li>
                    <li> <img className="logo" src={Logo} alt="Logo" /></li>
                    <li className="Navbar__Options"> <Link to="/">Videos</Link></li>
                    <li className="Navbar__Options"> <Link to="/">Galeria</Link></li>
                    <li className="Navbar__Options"> <Link to="/">Contactanos</Link></li>
                </ul>
                <div className="Navbar__Social">
                    <div className="icon-facebook icon"></div>
                    <div className="icon-instagram icon"></div>
                    <div className="icon-spotify icon"></div>
                </div>

            </div>
        )
    }
}

export default Navbar