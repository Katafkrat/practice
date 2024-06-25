const _apiBase = 'https://api.themoviedb.org/3/'
const _apiKey = process.env.REACT_APP_API_KEY

export const getPopularMovies = async () => {
	try {
		const res = await fetch(`${_apiBase}movie/popular?api_key=${_apiKey}`)
		await res.json()
		console.log(res)

		return res
	} catch (error) {
		console.error('Error fetching popular movies:', error)
		throw error
	}
}
