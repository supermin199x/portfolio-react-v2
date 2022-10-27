import React from "react";
import '../css/Title.css'
import 'react-typed/dist/animatedCursor.css';
import Typed from "react-typed";

export function Title(){
    return(
        <>
            <div className="title-container">
                <p className="name">
                    <Typed
                        strings={[ "Hi, I'm Santi Suksakul"]}
                        typeSpeed={150}
                        backSpeed={100}
                    />
                </p>
                <p className="detail">
                    Programmer and IT Support.
                </p>
            </div>
        </>
    );
}