import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './components/themeContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
				<Router>
					<App />
				</Router>
		</ThemeProvider>
	</React.StrictMode>
	, document.getElementById('root'));

