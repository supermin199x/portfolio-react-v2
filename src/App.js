import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Profile} from './pages/Profile';
import {Skills} from './pages/Skills';
import {Projects} from './pages/Projects';
import {Contacts} from './pages/Contacts';

const App = () => {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
				<Route index element={<Profile />} />
				<Route path="Skills" element={<Skills />} />
				<Route path="Projects" element={<Projects />} />
				<Route path="Contacts" element={<Contacts />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);	
}

export default App;