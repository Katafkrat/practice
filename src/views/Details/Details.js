/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getMoviesByIdAPI, getMoviesRecommendationsAPI } from '../../services/APIService.ts'
import MovieSlider from '../../components/slider/Slider'

import noImagePlaceholder from '../../resource/No-Image-Placeholder.png'

import './Detail.scss'

const Details = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [movies, setMovies] = useState({
		movie: {},
		recommendedMovies: [],
	})

	const getMovies = async id => {
		const [movie, recommendedMovies] = await Promise.all([
			getMoviesByIdAPI(id),
			getMoviesRecommendationsAPI(id),
		])
		setMovies({
			movie,
			recommendedMovies,
		})
	}

	useEffect(() => {
		if (id)
			getMovies(id)
		window.scrollTo(0, 0)
	}, [id])

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div>
			<div className="card__movie">
				<div className="image-button-container">
					<button onClick={handleGoBack}>Go Back</button>
					{movies.movie?.poster_path && (
						<img src={movies.movie?.poster_path
							? `https://image.tmdb.org/t/p/w500${movies.movie.poster_path}`
							: noImagePlaceholder} alt={movies.movie?.title} />
					)}
				</div>
				<div className="card__details">
					<div className="card__details__title">{movies.movie?.title}</div>
					<div className="card__details__release-date">Release Date: {movies.movie?.release_date}</div>
					<div className="card__details__rating">Rating: {movies.movie?.vote_average} / 10</div>
					<div className="card__details__genres">
						Genres:
						{movies.movie?.genres && movies.movie?.genres.map(genre => (
							<span key={genre?.id} className="genre">{' ' + genre?.name}</span>
						))}
					</div>
					<div className="overview">{movies.movie?.overview}</div>
				</div>
			</div>
			{movies.recommendedMovies ? <MovieSlider data={movies.recommendedMovies?.results} /> : null}
		</div>
	)
}

export default Details
