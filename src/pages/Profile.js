import React from "react";
import '../css/Profile.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {Search} from '../components/Search';
import {Posts} from '../components/Posts';
import {ProfileDetail} from '../components/ProfileDetail';


export function Profile() {
    return (
		<div className="profile-container">
			<div className="profile-show-navbar">
				<Navbar />
			</div>
			<div className="profile-show-content">
				
			</div>
			<div className="profile-show-post">
				<ProfileDetail />
			</div>
		</div>
	);	
}