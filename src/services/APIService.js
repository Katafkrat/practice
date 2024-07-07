import axios from 'axios'

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		api_key: process.env.REACT_APP_API_KEY
	}
})

export const getMoviesAPI = async selector => {
	try {
		const { data } = await apiClient.get(`movie/${selector}`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesByIdAPI = async id => {
	try {
		const { data } = await apiClient.get(`movie/${id}`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesRecommendationsAPI = async id => {
	try {
		const { data } = await apiClient.get(`movie/${id}/recommendations`)

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}

export const getMoviesSearchAPI = async query => {
	try {
		const { data } = await apiClient.get('/search/movie', {
			params: {
				query
			}
		})

		return data
	} catch (error) {
		console.error('Error fetching movies:', error)
		throw error
	}
}
