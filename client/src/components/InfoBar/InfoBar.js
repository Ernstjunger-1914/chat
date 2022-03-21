import React from 'react';
import online from '../../icons/onlineIcon.png';
import close from '../../icons/closeIcon.png'
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={online} alt='online icon' />
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={close} alt='close icon' /></a>
        </div>
    </div>
);

export default InfoBar;