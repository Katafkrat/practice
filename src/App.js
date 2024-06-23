import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'

import './App.scss'

function App() {
	return (
		<div className="app">
			<Header/>
			<main>
				<div className='container'>
					<HomePage/>
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export default App
