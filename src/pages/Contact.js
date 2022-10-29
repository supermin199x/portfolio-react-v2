import React from "react";
import '../css/Contact.css';
import {Navbar} from '../components/Navbar';
import {Title} from '../components/Title';
import {ContactDetail} from '../components/ContactDetail';


export function Contact(){
    return(
		<div className="contact-container">
			<div className="contact-show-navbar">
				<Navbar />
			</div>
			<div className="contact-title">
				Contact
			</div>
			<div className="contact-show-post">
				<ContactDetail />
			</div>
		</div>
    );
}