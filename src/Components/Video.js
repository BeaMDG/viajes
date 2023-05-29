import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../Assets/video.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Blog de Viajes Milano</h1>
                <p>Encuentra tu lugar</p>
                <div>
                    <Link to='/Gastro' className='btn'>Gastro</Link>
                    <Link to='/Weather' className='btn '>Weather</Link>
                    <Link to='/Museos' className='btn'>Museos</Link>
                    <Link to='/Appibea' className='btn '>Divisas</Link>
                    <Link to='/Where' className='btn '>Donde Ir</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
