import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import portfolio from '../../img/portfolio-img1.png'
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <div className="header__banner d-flex justify-content-center pt-4">
                <div className="header__banner-main container row">
                    <div className='header__banner-text col'>
                        <h4>Hola! Soy <br />  Louby Claméus</h4>
                        <div className='hr my-3'></div>

                        <p>
                            Soy un <strong>front-end</strong> web devlopper.
                            Me dedico a crear moderna pagina web y, soy diseñador grafico tambien.
                        </p>
                        <Link to='/'>
                            <button className='btn text-uppercase btn-outline-success'>mandarme un email</button>
                        </Link>
                    </div>
                    <div className="img col ">
                        <img className='header__banner-img ' src={portfolio} alt="portfolio img" />
                    </div>
                </div>
            </div>
            <div className='header__banner-bottom d-flex justify-content-center'>
                <nav className='header__nav'>
                    <hr />
                    <ul className='header__nav-links'>
                        <li><NavLink className='header__nav-link activated' to='/'>Inicio</NavLink></li>
                        <li><NavLink className='header__nav-link' to='/'>Portafolio</NavLink></li>
                        <li><NavLink className='header__nav-link' to='/'>Contacto</NavLink></li>
                    </ul>
                    <hr />
                </nav>
            </div>

        </div>
    )
}

export default Header
