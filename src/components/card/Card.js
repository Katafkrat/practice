import './Card.scss'
import APIService from '../../services/APIService'

const Card = ({ cast }) => {

	return (
		<li className="card__item">
			<img src="https://posterhouse.org/wp-content/uploads/2023/07/DB_019.jpg" alt="movie" />
			<div className="card__title">Movie</div>
		</li>
	)
}

export default Card
