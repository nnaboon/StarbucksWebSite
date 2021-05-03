import React from 'react';
import logo from './images/starbucks_corporation_logo.png';

export default function Header() {
    return(
        <div className="w-full">
            <div className="flex flex-rows w-full justify-between mb-4">
                <div className="w-16 h-16 mx-8 mt-2">
                    <img className="w-full h-full" src={logo} alt="starbucks logo"/>
                </div>
                <div>
                    <ul className="flex flex-rows mt-12">
                        <a className="mx-4" href="#"><li>COFFEE & TEA AT HOME</li></a>
                        <a className="mx-4"><li>MENU</li></a>
                        <a className="mx-4"><li>MECHANDISE</li></a>
                        <a className="mx-4"><li>STARBUCKS REWARDS</li></a>
                    </ul>
                </div>
                <div className="flex flex-rows justify-end mt-12 mx-8">
                    <div>find a store</div>
                    <div>ไทย</div>
                </div>
            </div>
        </div>
    )
}