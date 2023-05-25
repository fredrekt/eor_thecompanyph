import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import './App.scss'
import './fonts/CodecPro-Regular.ttf'
import './fonts/CodecPro-Italic.ttf'

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" index element={<Homepage />} />
			</Routes>
		</>
	);
};

export default App;
