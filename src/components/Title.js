import React from "react";
import '../css/Title.css'
import 'react-typed/dist/animatedCursor.css';

export function Title(){
    return(
        <>
            <div className="title-container">
                <p className="name">
                    Hi, I'm Santi Suksakul
                </p>
                <p className="detail">
                    Programmer and IT Support.
                </p>
            </div>
        </>
    );
}