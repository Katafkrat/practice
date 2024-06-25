import Card from '../card/Card'
import SearchPanel from '../searchPanel/SearchPanel'

import './HomePage.scss'

const HomePage = () => {
	return (
		<div>
			<SearchPanel />
			<span>Featured Movies</span>
			<div className="movie__list">
				<ul className="movie__grid">
					{Array(12).fill(null).map(el => <Card />)}
				</ul>
			</div>
			<span>New Arrival</span>
			<div className='movie__list'>
				<ul className="movie__grid">
					{Array(12).fill(null).map(el => <Card />)}
				</ul>
			</div>
			<span>Featured Cast</span>
			<div className='movie__list'>
				<ul className="movie__grid">
					{Array(12).fill(null).map(el => <Card />)}
				</ul>
			</div>
		</div>
	)
}

export default HomePage
