import PropTypes from 'prop-types'

import { getPopularMovies } from '../../services/APIService.js'

import './Card.scss'

const Card = ({ imageURL, title }) => {
	getPopularMovies()

	return (
		<li className="card__item">
			<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpI3EO__f7Ge7dcM90tsSjvmt0PxZw2JpFLgvwU1M6K5hLsOAN" alt="cast" />
			<div className="card__title">Cast</div>
		</li>
	)
}

Card.propTypes = {
	imageURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Card
