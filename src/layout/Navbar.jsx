import React from 'react';
import Logo from '../assets/img/WhiteFox.png';

function Navbar(props) {
    return(
        <div className={props.active ? "Navbar active" : "Navbar"}>
            <div className="Logo">
                <img src={Logo} alt="Foxstudio's Logo" />
            </div>
            <ul className="Menu">
                <li className="item" data-section="servers">
                    <a href="http://#">à propos</a>
                </li>
                <li className="item" data-section="team">
                    <a href="http://#">l'équipe</a>
                </li>
                <li className="item" data-section="discord">
                    <a href="http://#">nous rejoindre</a>
                </li>
            </ul>
            <ul className="Menu mobile">
                <li className="item" data-section="servers">
                    <a href="http://#">à propos</a>
                </li>
                <li className="item" data-section="team">
                    <a href="http://#">l'équipe</a>
                </li>
                <li className="item" data-section="discord">
                    <a href="http://#">nous rejoindre</a>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;