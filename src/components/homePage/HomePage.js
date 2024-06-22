import MovieCard from '../movieCard/MovieCard'
import CastCard from '../castCard/CastCard'
import SearchPanel from '../searchPanel/SearchPanel'

import './HomePage.scss'

const HomePage = () => {
	return (
		<div>
			<SearchPanel/>
			<div className="movie__list">
				Featured Movies
				<ul className="movie__grid">
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
				</ul>
			</div>
			<div className='movie__list'>
				New Arrival
				<ul className="movie__grid">
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
					<MovieCard/>
				</ul>
			</div>
			<div className='cast__list'>
				Featured Cast
				<ul className="cast__grid">
					<CastCard/>
					<CastCard/>
					<CastCard/>
					<CastCard/>
					<CastCard/>
					<CastCard/>
					<CastCard/>
					<CastCard/>
				</ul>
			</div>
		</div>
	)
}

export default HomePage
