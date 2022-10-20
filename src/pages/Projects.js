import React from "react";
import '../css/Projects.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {Software} from '../components/Software';

export function Projects(){
    return(
		<div className="Projects-container">
			<div className="Projects-show-navbar">
				<Navbar />
			</div>
			<div className="Projects-show-content">
				<Title />
			</div>
			<div className="Projects-show-post">
				<Software />
			</div>
		</div>
    );
}