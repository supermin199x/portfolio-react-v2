import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Profile} from './pages/Profile';
import {Skills} from './pages/Skills';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';
import {Error404} from './pages/Error404';


const App = () => {
    return (
		<div className="app-container">
			<BrowserRouter>
				<Routes>
					<Route index element={<Profile />} />
					<Route path="react2022" element={<Profile />} />
					<Route path="Skills" element={<Skills />} />
					<Route path="Projects" element={<Projects />} />
					<Route path="Contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);	
}

export default App;