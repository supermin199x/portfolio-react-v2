import React from "react";
import '../css/Skills.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {Programming} from '../components/Programming';


export function Skills(){
    return(
		<div className="skills-container">
			<div className="skills-show-navbar">
				<Navbar />
			</div>
			<div className="skills-show-content">
				<Title />
			</div>
			<div className="skills-show-post">
				<Programming />
			</div>
		</div>
    );
}