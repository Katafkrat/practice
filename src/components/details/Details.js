import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getMoviesAPI } from "../../services/APIService"

import './Detail.scss'

const Details = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState([])

	const getMovieByID = (title, selector) => {
		getMoviesAPI(selector).then(data => {
			title(data)
		}).catch(error => {
			console.error('Error fetching popular movies:', error)
		})
	}

	useEffect(() => getMovieByID(setMovie, id), [])

	return (
		<div className="card__movie">
			<img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} />
			<div className="card__title">{movie?.title}</div>
			<div className="overview">{movie?.overview}</div>
		</div>
	)
}

export default Details
