import React from "react";
import '../css/Skills.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {SkillDetail} from '../components/SkillDetail';


export function Skills(){
    return(
		<div className="skills-container">
			<div className="skills-show-navbar">
				<Navbar />
			</div>
			<div className="skills-show-content">
				<div className="skill-title">
					Skills
				</div>
			</div>
			<div className="skills-show-post">
				<SkillDetail />
			</div>
		</div>
    );
}