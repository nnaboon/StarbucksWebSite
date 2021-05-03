import React from 'react';
import DrinkMenu from './DrinkMenu';
import Header from './header';
import HowToOrder from './HowToOrder';
import Slider from './Slider';

export default function App() {
    return(
        <div className="w-full">
            <Header />
            <Slider />
            <DrinkMenu />
            <HowToOrder />
        </div>
    )
}