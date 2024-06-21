import MovieCard from '../movieCard/MovieCard';

import './HomePage.scss'

const HomePage = () => {
	return (
		<div className="movie__list">
			Popular
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
	)
}


export default HomePage;