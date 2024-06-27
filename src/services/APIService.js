import axios from 'axios'

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		api_key: process.env.REACT_APP_API_KEY
	}
})

export const getPopularMoviesAPI = async () => {
	try {
		const res = await apiClient.get('movie/popular')

		return res.data
	} catch (error) {
		console.error('Error fetching popular movies:', error)
		throw error
	}
}
