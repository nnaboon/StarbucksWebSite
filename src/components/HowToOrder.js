import React from 'react';
import rewards from '../images/MOP-banner-rewards-logo.png';
import banner_1 from '../images/MOP-banner-1.png';
import banner_2 from '../images/MOP-banner-2.png';

export default function HowToOrder() {
    return(
        <div className="w-full">
            <div className=" bg-primary h-2/4 mx-12 mb-12 text-white">
                <div className="flex justify-end py-8 px-16">
                    <img className="w-40 h-8" src={rewards} alt="starbucks rewards" />
                </div>
                <div className="w-full pt-16 pb-20">
                    <div className="flex flex-rows justify-center items-center">
                        <img className="w-96 h-96 mr-24" src={banner_1} alt="banner 1" />
                        <img className="w-98 h-80" src={banner_2} alt="banner 2" />
                    </div>
                </div>
            </div>
        </div>
    )
}