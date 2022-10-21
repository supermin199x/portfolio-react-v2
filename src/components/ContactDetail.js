import React from "react";
import '../css/ContactDetail.css';

export function ContactDetail() {
    return(
        <div>
             <div className="contactDetail-container">
                <div className="contactDetail-canvas">
                    <div className="contactDetail-box">
                        <p  className="contactDetail-title">โทร</p>
                        <ul className="contactDetail-address">
                            <li>064-163-7610</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box">
                        <p  className="contactDetail-title">Line</p>
                        <ul className="contactDetail-address">
                            <li>0988736962</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box">
                        <p  className="contactDetail-title">E-mail</p>
                        <ul className="contactDetail-address">
                            <li>s.statiion@icloud.com</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box">
                        <p  className="contactDetail-title">Website</p>
                        <ul className="contactDetail-address">
                            <li>https://supermin199x.github.io/react2022/</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}