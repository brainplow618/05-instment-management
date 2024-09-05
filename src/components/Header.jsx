import React from "react";
import logo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <header id="header">
            <img src={logo} alt="logo showing a mony bag." />
            <h1>Investiment Calculator</h1>
        </header>
    )
    
}