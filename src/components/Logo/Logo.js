import React from 'react';
import Tilt from 'react-tilt';
import megusta from './megusta.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"><img height='100' src={megusta} alt='logo' /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;