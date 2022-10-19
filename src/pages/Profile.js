import React from "react";
import '../css/Profile.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {Search} from '../components/Search';
import {Posts} from '../components/Posts';


export function Profile() {
    return (
		<div className="container">
			<Navbar />
			<div className="content">
				<Title />
				<Search />
			</div>
			<div className="Post">
				<Posts />
			</div>
		</div>
	);	
}