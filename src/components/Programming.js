import React from "react";
import '../css/Programming.css';

export function Programming() {
    return(
        <div>
             <div className="programming-container">
                <div className="programming-canvas">
                    <div className="programming-box">
                        <p className="programming-title">Programming</p>
                        <label htmlFor="">Front End</label>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>React</li>
                            <li>JQuery</li>
                        </ul>
                        <label htmlFor="">Back End</label>
                        <ul>
                            <li>PHP</li>
                            <li>ASP.NET</li>
                        </ul>
                        <label htmlFor="">Database</label>
                        <ul>
                            <li>MS SQL</li>
                            <li>My SQL</li>
                            <li>Crystal Report C#</li>
                            <li>Node Red API</li>
                        </ul>
                    </div>
                    <div className="programming-box">
                        <p className="programming-title">It Support</p>
                        <ul>
                            <li>Windows Server</li>
                            <li>Domain Controler, AD</li>
                            <li>Fix Computer, Laptop, Handheld, CCTV</li>
                            <li>Fix Problem Internet</li>
                        </ul>
                    </div>
                    <div className="programming-footer">
                        <p className="programming-title">Lorem</p>
                        <div className="programming-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati quibusdam reprehenderit fuga odit eveniet sed qui vel rem quae maxime similique natus exercitationem! Saepe iusto eos enim ea accusantium!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}