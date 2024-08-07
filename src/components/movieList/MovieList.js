import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import noImagePlaceholder from '../../resource/No-Image-Placeholder.png'

import './MovieList.scss'

const MovieList = ({ title, data = [] }) => {

	return (
		<div>
			<h2>{title}</h2>
			<ul className="movie__grid">
				{data.slice(0, 12).map(movie => (
					<Link to={`/movie/${movie?.id}`} key={movie?.id}>
						<li className='card__item'>
							<img src={movie?.poster_path
								? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
								: noImagePlaceholder} alt={movie?.title} />
							<div className="card__title">{movie?.title}</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

MovieList.propTypes = {
	data: PropTypes.array.isRequired,
	title: PropTypes.string
}

export default MovieList
