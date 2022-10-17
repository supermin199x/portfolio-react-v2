import React from "react";
import '../css/Search.css'

export function Search(){
    return(
        <div>
            <p className="search">
                <input 
                    className="input-search" 
                    type="text" 
                    placeholder="Search for posts"
                />
            </p>
        </div>
    );
}