import React from 'react';
import "./Home.css";
import { NavLink } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'

import webadaptive from '../../img/web-adaptive.jpg';
import webdesign from '../../img/web-design.jpg';
import webgraphic from '../../img/graphic-design.jpg';

function Home() {

    return (
        <div className='home mt-4'>

            <div className="card-group">
                <div className='home__services container'>
                    <div className="card text-center border-grey  mb-3 ">
                        <div className="card-header">
                            <h5> Sitio Web Adaptivo</h5>
                        </div>
                        <img className='card-img p-4 ' src={webadaptive} alt="" />
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vero commodi blanditiis repudiandae quis mollitia et magni sed iure ducimus cumque a, iste facilis veniam animi maiores earum vitae placeat.</p>
                        </div>
                    </div>
                    <div className="card text-center border-grey mb-3 ">
                        <div className="card-header">
                            <h5> Diseño grafico</h5>
                        </div>
                        <img className='card-img p-4 ' src={webgraphic} alt="" />
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vero commodi blanditiis repudiandae quis mollitia et magni sed iure ducimus cumque a, iste facilis veniam animi maiores earum vitae placeat.</p>
                        </div>                    </div>
                    <div className="card text-center border-grey mb-3 ">
                        <div className="card-header">
                            <h5> Diseño web moderno</h5>
                        </div>
                        <img className='card-img p-4 ' src={webdesign} alt="" />
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vero commodi blanditiis repudiandae quis mollitia et magni sed iure ducimus cumque a, iste facilis veniam animi maiores earum vitae placeat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className=''>
                <p className='footer-copyright'>&copy; 2020 Lb Design</p>
                <ul className='footer__nav-links'>
                    <li><NavLink className='footer-link' to='/'>Inicio</NavLink></li>
                    <li><NavLink className='footer-link' to='/'>Portafolio</NavLink></li>
                    <li><NavLink className='footer-link' to='/'>Contacto</NavLink></li>
                </ul>
                <form action="" className='my-2'>
                    <input type="text" className="form-control text-center" placeholder={`Ingresar tu email `} />
                </form>
                <div className="footer__icons ">
                    <ul className="footer-list-icons">
                        <li className='footer-icons'><a href="https://www.facebook.com/loubyf1/" target='_blanck'><FaIcons.FaFacebookF /></a> </li>
                        <li className='footer-icons'><a href="https://twitter.com/LoubyAime" target='_blanck'><FaIcons.FaTwitter /></a></li>
                        <li className='footer-icons'><a href="https://www.instagram.com/loubyclameus/" target='_blanck'><FaIcons.FaInstagram /></a></li>
                    </ul>
                </div>


            </footer>
        </div >
    )
}

export default Home
