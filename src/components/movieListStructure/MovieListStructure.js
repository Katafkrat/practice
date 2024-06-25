import Card from "../card/Card"

import './MovieListStructure.scss'

const MovieListStructure = ({ listName }) => {
	return (
		<div>
			<span>{listName}</span>
			<div className="movie__list">
				<ul className="movie__grid">
					{Array(12).fill(null).map(el => <Card />)}
				</ul>
			</div>
		</div>
	)
}

export default MovieListStructure
