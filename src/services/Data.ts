export interface Genre {
	id: number,
	name: string
}

export interface Movie {
	id: number,
	title: string,
	poster_path: string,
	release_date: string,
	overview: string,
	vote_average: string,
	genres: Genre[]
}

export interface MoviesResponse {
	results: Movie[],
	total_results: number,
	total_pages: number,
	page: number
}
