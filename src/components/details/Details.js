import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getMoviesAPI } from '../../services/APIService'
import MovieSlider from '../slider/Slider'

import './Detail.scss'

const Details = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState({})
	const [recomendedMovies, setRecomendedMovies] = useState([])

	const getMovieByID = (title, selector) => {
		getMoviesAPI(selector).then(data => {
			title(data)
		}).catch(error => {
			console.error('Error fetching movie:', error)
		})
	}

	useEffect(() => getMovieByID(setMovie, id), [id])
	useEffect(() => getMovieByID(setRecomendedMovies, `${id}/recommendations`), [id])

	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div>
			<div className="card__movie">
				<div className="image-button-container">
					<button onClick={handleGoBack}>Go Back</button>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
				</div>
				<div className="card__details">
					<div className="card__details__title">{movie.title}</div>
					<div className="card__details__release-date">Release Date: {movie.release_date}</div>
					<div className="card__details__rating">Rating: {movie.vote_average} / 10</div>
					<div className="card__details__genres">
						Genres:
						{movie.genres && movie.genres.map(genre => (
							<span key={genre.id} className="genre">{' ' + genre.name}</span>
						))}
					</div>
					<div className="overview">{movie.overview}</div>
				</div>
			</div>
			<MovieSlider data={recomendedMovies.results} />
		</div>
	)
}

export default Details
