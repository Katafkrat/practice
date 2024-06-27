import './MovieList.scss'

const MovieList = ({ title, data = [] }) => {

	return (
		<div>
			<h2>{title}</h2>
			<ul className="movie__grid">
				{data?.slice(0, 12).map(movie => (
					<li className="card__item">
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="cast" />
						<div className="card__title">{movie.title}</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MovieList
