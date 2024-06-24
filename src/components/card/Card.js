import './Card.scss'
import APIService from '../../services/APIService'

const Card = ({ cast }) => {
	if (!cast) {
		return (
			<li className="card__item">
				<img src="https://posterhouse.org/wp-content/uploads/2023/07/DB_019.jpg" alt="movie" />
				<div className="card__title">Movie</div>
			</li>
		)
	}

	return (
		<li className="card__item">
			<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpI3EO__f7Ge7dcM90tsSjvmt0PxZw2JpFLgvwU1M6K5hLsOAN" alt="cast" />
			<div className="card__title">Cast</div>
		</li>
	)
}

export default Card
