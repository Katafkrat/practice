import { useState, useEffect } from 'react'

import Card from "../card/Card"
import { getPopularMovies } from "../../services/APIService"

import './MovieListStructure.scss'

const MovieListStructure = ({ listName }) => {
	const [movies, setMovies] = useState([])

	getPopularMovies().then(data => {
		setMovies(data)
	}).catch(error => {
		console.error('Error fetching popular movies:', error)
	})

	return (
		<div>
			<span>{listName}</span>
			<div className="movie__list">
				<ul className="movie__grid">
					{movies.slice(0, 12).map((movie, index) => (
						<Card key={index} {...movie} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MovieListStructure
