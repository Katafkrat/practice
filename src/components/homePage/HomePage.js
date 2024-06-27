import { useState, useEffect } from 'react'

import SearchPanel from '../searchPanel/SearchPanel'
import MovieList from '../movieList/MovieList'
import { getPopularMoviesAPI } from "../../services/APIService"

import './HomePage.scss'

const HomePage = () => {
	const [movies, setMovies] = useState([])
	const getPopularMovies = () => {
		getPopularMoviesAPI().then(data => {
			setMovies(data)
		}).catch(error => {
			console.error('Error fetching popular movies:', error)
		})
	}

	useEffect(() => getPopularMovies, [])

	return (
		<div>
			<SearchPanel />
			<MovieList title={'Featured Movies'} data={movies.results} />
			<MovieList title={'New Arrival'} data={movies.results} />
			<MovieList title={'Featured Cast'} data={movies.results} />
		</div>
	)
}

export default HomePage
