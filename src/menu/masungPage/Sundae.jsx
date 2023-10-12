import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/DDUKBAB.png';
import image_net from '../../img/nutrient/masung.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Sundae() {
    const logoText = "마성떡볶이";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionMasung">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            찰순대
                        </div>
                        <div className='menu-price'>
                            3,500원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' width='340' height='215' />
            </div>
        </div>
    );
}

export default Sundae;