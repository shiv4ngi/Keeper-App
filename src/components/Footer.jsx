import React from "react";

function Footer(){

    const d = new Date();

    return <footer className="footer">
    <p className="footer p">copyright © AnneArose {d.getFullYear()}</p>
    </footer>
    
}

export default Footer;