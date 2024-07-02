import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './views/HomePage/HomePage'
import Details from './views/Details/Details'

import './App.scss'

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<main>
					<div className='container'>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/movie/:id" element={<Details />} />
						</Routes>
					</div>
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
