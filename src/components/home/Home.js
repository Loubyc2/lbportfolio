import React, { useEffect } from 'react';
import "./Home.css";

import webadaptive from '../../img/web-adaptive.jpg';
import webdesign from '../../img/web-design.jpg';
import webgraphic from '../../img/graphic-design.jpg';

function Home() {
    const [screen, setScreen] = React.useState(window.innerWidth)
    const checkScreen = () => {
        setScreen(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkScreen)
    })
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
            {screen}
        </div>
    )
}

export default Home
