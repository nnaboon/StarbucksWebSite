import React from 'react';
import banner from '../images/banner2_thumnail.png';
import foodBanner from '../images/Food_Summer2021_Web_thumnail.png';

export default function DrinkMenu() {
    return (
        <>
            <h1>FOAMY FLUFFY FEELS</h1>
            <div className="grid grid-cols-2 gap-8 p-12 -mb-4">
                <div>
                    <img src={banner} alt="main drink pic" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <img src={foodBanner} alt="grid drink pic" />
                    <img src={foodBanner} alt="grid drink pic" />
                    <img src={foodBanner} alt="grid drink pic" />
                    <img src={foodBanner} alt="grid drink pic" />
                </div>
            </div>
        </>
    )
}