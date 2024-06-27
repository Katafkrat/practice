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
