import './MovieContainer.scss'

const MovieContainer = () => {
	return (
		<div className="movie__list">
			Popular
			<ul className="movie__grid">
				<Movie/>
				<Movie/>
				<Movie/>
				<Movie/>
				<Movie/>
				<Movie/>
				<Movie/>
				<Movie/>
			</ul>
		</div>
	)
}

const Movie = () => {
	return (
		<li className="movie__item">
			<img src="" alt="movie" />
			<div className="movie__name">Movie</div>
		</li>
	)
}

export default MovieContainer;