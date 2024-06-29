import { useState, useEffect } from 'react'

import SearchPanel from '../searchPanel/SearchPanel'
import MovieList from '../movieList/MovieList'
import { getMoviesAPI } from "../../services/APIService"

import './HomePage.scss'

const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([])
	const [topRatedMovies, setTopRatedMovies] = useState([])
	const [upcomingMovies, setUpcomingMovies] = useState([])

	const getMovies = (title, selector) => {
		getMoviesAPI(selector).then(data => {
			title(data)
		}).catch(error => {
			console.error('Error fetching popular movies:', error)
		})
	}

	useEffect(() => getMovies(setPopularMovies, 'popular'), [])
	useEffect(() => getMovies(setTopRatedMovies, 'top_rated'), [])
	useEffect(() => getMovies(setUpcomingMovies, 'upcoming'), [])

	return (
		<div>
			<SearchPanel />
			<MovieList title={'Featured Movies'} data={popularMovies.results} />
			<MovieList title={'Top Rated'} data={topRatedMovies.results} />
			<MovieList title={'Upcoming'} data={upcomingMovies.results} />
		</div>
	)
}

export default HomePage
