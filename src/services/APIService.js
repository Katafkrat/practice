import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'https://api.themoviedb.org/3/', // базовий URL
	params: {
		api_key: process.env.REACT_APP_API_KEY // додаткові параметри, які будуть включені у всі запити
	}
})

export const getPopularMovies = async () => {
	try {
		const res = await apiClient.get('movie/popular')
		console.log(res.data)

		return res.data
	} catch (error) {
		console.error('Error fetching popular movies:', error)
		throw error
	}
}
