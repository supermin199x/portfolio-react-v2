import React from "react";
import '../css/ProfileDetail.css';
import { TitleType } from "../components/TitleType";

export function ProfileDetail(){
    return(
        <div className="ProfileDetail-container">
            <div className="ProfileDetail-canvas">
                <div className="ProfileDetail-content-left">
                    <TitleType />
                </div>
                <div className="ProfileDetail-content-right">
                    <img className="ProfileDetail-logo" src={ require('../images/person.jpg') }  alt="" />
                </div>
            </div>
        </div>
    );
}
