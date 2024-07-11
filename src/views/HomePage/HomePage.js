/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

import SearchPanel from '../../components/searchPanel/SearchPanel'
import MovieList from '../../components/movieList/MovieList'
import { getMoviesAPI, getMoviesSearchAPI } from '../../services/APIService.ts'

import './HomePage.scss'

const HomePage = () => {
	const [movies, setMovies] = useState({
		popularMovies: [],
		topRatedMovies: [],
		upcomingMovies: [],
	})

	const [searchMovies, setSearchMovies] = useState('')

	const getMovies = async () => {
		const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
			getMoviesAPI('popular'),
			getMoviesAPI('top_rated'),
			getMoviesAPI('upcoming')
		])
		setMovies({
			popularMovies,
			topRatedMovies,
			upcomingMovies
		})
	}

	useEffect(() => getMovies, [])

	const handleSearch = async query => {
		const results = await getMoviesSearchAPI(query)
		setSearchMovies(results)
	}

	return (
		<div>
			<SearchPanel onSubmit={handleSearch} />
			{searchMovies?.results?.length > 0 ? <MovieList title={'Results'} data={searchMovies?.results} /> : null}
			<MovieList title={'Featured Movies'} data={movies.popularMovies?.results} />
			<MovieList title={'Top Rated'} data={movies.topRatedMovies?.results} />
			<MovieList title={'Upcoming'} data={movies.upcomingMovies?.results} />
		</div>
	)
}

export default HomePage
