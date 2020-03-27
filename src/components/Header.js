import React from "react";
import "../styles/Header.css";
import menu from "../images/menu.svg";
import avatar from "../images/avatar.png";
import avatar2x from "../images/avatar@2x.png";
import avatar3x from "../images/avatar@3x.png";

function Header() {
    return (
        <header className="header">
            <img src={menu} alt="Menu" class="menu" />

            <div className="user">
                <img src={avatar} srcSet={`${avatar2x} 2x, ${avatar3x} 3x`} alt="Okonkwo Karen" className="avatar" />
                <div className="details">
                    <p>
                        <span className="name"> Okonkwo Karen</span>
                        <span className="role"> Executive </span>
                    </p>
                    <span className="dropdown"> &#9660; </span>
                </div>
            </div>
        </header>
    );
}

export default Header;