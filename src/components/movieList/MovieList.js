import { Link } from 'react-router-dom'

import './MovieList.scss'

const MovieList = ({ title, data = [] }) => {

	return (
		<div>
			<h2>{title}</h2>
			<ul className="movie__grid">
				{data?.slice(0, 12).map(movie => (
					<Link to={`/movie/${movie?.id}`}>
						<li className='card__item'>
							<img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} />
							<div className="card__title">{movie?.title}</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default MovieList
