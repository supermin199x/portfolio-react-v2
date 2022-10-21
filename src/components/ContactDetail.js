import React, {useState} from "react";
import '../css/ContactDetail.css';

export function ContactDetail() {

    const [message, setMessage] = useState('Hello World.');

    const handleChange = (data) => {
      setMessage(data);
    }

    return(
        <div>
             <div className="contactDetail-container">
                <div className="contactDetail-canvas">
                    <div className="contactDetail-box" onClick={(event) => handleChange('064-163-7610')}>
                        <p className="ribbon"></p>
                        <ul className="contactDetail-address">
                            <p className="contactDetail-title">Phone</p>
                            <li className="contactDetail-item">064-163-7610</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box" onClick={(event) => handleChange('0988736962')}>
                        <p className="ribbon"></p>
                        <ul className="contactDetail-address">
                            <p className="contactDetail-title">Line</p>
                            <li className="contactDetail-item">0988736962</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box" onClick={(event) => handleChange('s.statiion@icloud.com')}>
                        <p className="ribbon"></p>
                        <ul className="contactDetail-address">
                            <p className="contactDetail-title">Email</p>
                            <li className="contactDetail-item">s.statiion@icloud.com</li>
                        </ul>
                    </div>
                    <div className="contactDetail-box" onClick={(event) => handleChange('supermin199x.github.io/react2022/')} >
                        <p className="ribbon"></p>
                        <ul className="contactDetail-address">
                            <p className="contactDetail-title">Website</p>
                            <li className="contactDetail-item">supermin199x.github.io/react2022/</li>
                        </ul>
                    </div>
                </div>
                <div className="contactDetail-show-result">
                    <input className="contactDetail-show-result-input" type="text" value={message} />
                </div>
            </div>
        </div>
    );
}