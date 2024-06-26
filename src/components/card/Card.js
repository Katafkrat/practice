import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ imageURL, title }) => {
	const fullImageURL = `https://image.tmdb.org/t/p/w500${imageURL}`

	return (
		<li className="card__item">
			<img src={fullImageURL} alt="cast" />
			<div className="card__title">{title}</div>
		</li>
	)
}

Card.propTypes = {
	imageURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Card
