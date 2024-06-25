import SearchPanel from '../searchPanel/SearchPanel'
import MovieListStructure from '../movieListStructure/MovieListStructure'

import './HomePage.scss'

const HomePage = () => {
	return (
		<div>
			<SearchPanel />
			<MovieListStructure listName={'Featured Movies'} />
			<MovieListStructure listName={'New Arrival'} />
			<MovieListStructure listName={'Featured Cast'} />
		</div>
	)
}

export default HomePage
