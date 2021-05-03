import React from 'react';

export default function Contact() {
    return(
        <div className="px-12 py-8 w-full bg-gray-100">
            <div className="grid grid-cols-4 text-gray-500">
                <div className="flex flex-col">
                    <div className="leading-9 text-black"><b>ABOUT US</b></div>
                    <div className="leading-9">Our Heritage</div>
                    <div className="leading-9">Our Company</div>
                    <div className="leading-9">Responsibility</div>
                    <div className="leading-9">Career Center</div>
                </div>
                <div className="flex flex-col">
                    <div className="leading-9 text-black"><b>COFFEE & TEA AT HOME</b></div>
                    <div className="leading-9">Coffee Story</div>
                    <div className="leading-9">Coffee & Tea at Home</div>
                    <div className="leading-9">How to Brew</div>
                </div>
                <div className="flex flex-col">
                    <div className="leading-9">STARBUCKS REWARDS</div>
                    <div className="leading-9">PROMOTION</div>
                    <div className="leading-9">STARBUCKS CARD CORPORATE SALE</div>
                    <div className="leading-9">ADDITION INFORMATION</div>
                    <div className="leading-9">CONTACT US</div>
                </div>
                <div className="flex flex-rows text-black justify-center">
                    <div>English</div>
                    <div>ไทย</div>
                </div>
            </div>
        </div>
    )
}