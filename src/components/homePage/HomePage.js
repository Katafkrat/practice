import { useState, useEffect } from 'react'

import SearchPanel from '../searchPanel/SearchPanel'
import MovieList from '../movieList/MovieList'
import { getMoviesAPI } from "../../services/APIService"

import './HomePage.scss'

const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([])
	const [topRatedMovies, setTopRatedMovies] = useState([])
	const [upcomingMovies, setUpcomingMovies] = useState([])

	const getPopularMovies = () => {
		getMoviesAPI('popular').then(data => {
			setPopularMovies(data)
		}).catch(error => {
			console.error('Error fetching popular movies:', error)
		})
	}

	const getTopRatedMovies = () => {
		getMoviesAPI('top_rated').then(data => {
			setTopRatedMovies(data)
		}).catch(error => {
			console.error('Error fetching top rated movies:', error)
		})
	}

	const getUpcomingMovies = () => {
		getMoviesAPI('upcoming').then(data => {
			setUpcomingMovies(data)
		}).catch(error => {
			console.error('Error fetching upcoming movies:', error)
		})
	}

	useEffect(() => getPopularMovies, [])
	useEffect(() => getTopRatedMovies, [])
	useEffect(() => getUpcomingMovies, [])

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
