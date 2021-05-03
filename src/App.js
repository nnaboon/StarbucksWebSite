import React from 'react';
import Contact from './components/Contact';
import DrinkMenu from './components/DrinkMenu';
import Header from './components/header';
import HowToOrder from './components/HowToOrder';
import Slider from './Slider';

export default function App() {
    return(
        <div className="w-full">
            <Header />
            <Slider />
            <DrinkMenu />
            <HowToOrder />
            <Contact />
        </div>
    )
}