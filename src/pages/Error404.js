import React from "react";
import {Navbar} from '../components/Navbar';

export function Error404(){
    return(
		<div className="container">
			<Navbar />
			<div className="content">
				ERROR404.
			</div>
		</div>
    );
}
