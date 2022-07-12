import React from "react"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <Link to='/'>
                <div className="logo">
                    <img src={require('../img/header/logo.png')} alt="" className="logo__img" />
                    <div className="logo__description">
                        <div className="logo__title">REACT PIZZA</div>
                        <div className="logo__text">самая вкусная пицца во вселенной</div>
                    </div>
                </div>
            </Link>
        </footer>
    )
}