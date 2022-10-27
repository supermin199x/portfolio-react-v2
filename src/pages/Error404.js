import React from "react";
import '../css/Error404.css'
import {Navbar} from '../components/Navbar';

export function Error404(){
    return(
		<div className="error404-container">
			<Navbar />
			<div className="error404-content">
				<p className="error404-title">
					Error 404 Page Not Found.
				</p>
			</div>
		</div>
    );
}
