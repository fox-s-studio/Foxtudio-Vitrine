import React from 'react';
import Logo from '../assets/img/WhiteFox.png';

function MobileMenu(props) {
    return(
        <div className={props.active ? "MobileMenu active" : "MobileMenu"}>
            <div className="Logo">
                <img src={Logo} alt="Foxstudio's Logo" />
            </div>
            <ul className="Menu">
                <li className="item" data-section="servers">
                    <a href="http://#" className="title regular">à propos</a>
                </li>
                <li className="item" data-section="team">
                    <a href="http://#" className="title regular">l'équipe</a>
                </li>
                <li className="item" data-section="discord">
                    <a href="http://#" className="title regular">nous rejoindre</a>
                </li>
            </ul>
            <div className="Footer"></div>
        </div>
    )
};

export default MobileMenu;