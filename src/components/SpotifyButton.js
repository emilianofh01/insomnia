import React from 'react'
import { Link } from 'react-router-dom'
import './styles/SpotifyButton.css'

function SpotifyButton(params) {
    return (
        <React.Fragment>
            <Link to="#" className="SpotifyButton__container">
                <div className="icon-spotify SpotifyButton__icon"></div>
                <p className="SpotifyButton__text">¡Escuchanos!</p>
            </Link>
        </React.Fragment>
    )
}

export default SpotifyButton