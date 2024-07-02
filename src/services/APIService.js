import axios from 'axios'

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		api_key: process.env.REACT_APP_API_KEY
	}
})

export const getMoviesAPI = async selector => {
	try {
		const res = await apiClient.get(`movie/${selector}`)

		return res.data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesByIdAPI = async id => {
	try {
		const res = await apiClient.get(`movie/${id}`)

		return res.data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesRecommendationsAPI = async id => {
	try {
		const res = await apiClient.get(`movie/${id}/recommendations`)

		return res.data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesSearchAPI = async query => {
	try {
		const res = await apiClient.get('/search/movie', {
			params: {
				query: query
			}
		})

		return res.data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}
