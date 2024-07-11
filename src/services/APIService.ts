import axios from 'axios'
import { Movie, MoviesResponse } from './Data'

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		api_key: process.env.REACT_APP_API_KEY,
	},
})

export const getMoviesAPI = async (selector: string): Promise<Movie> => {
	try {
		const { data } = await apiClient.get<Movie>(`movie/${selector}`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesByIdAPI = async (id: number): Promise<Movie> => {
	try {
		const { data } = await apiClient.get<Movie>(`movie/${id}`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesRecommendationsAPI = async (id: number): Promise<MoviesResponse> => {
	try {
		const { data } = await apiClient.get<MoviesResponse>(`movie/${id}/recommendations`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesSearchAPI = async (query: string): Promise<MoviesResponse> => {
	try {
		const { data } = await apiClient.get<MoviesResponse>('/search/movie', {
			params: {
				query,
			},
		})

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}
