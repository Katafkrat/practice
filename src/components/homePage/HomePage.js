import Card from '../card/Card'
import SearchPanel from '../searchPanel/SearchPanel'

import './HomePage.scss'

const HomePage = () => {
	return (
		<div>
			<SearchPanel/>
			<span>Featured Movies</span>
			<div className="movie__list">
				<ul className="movie__grid">
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
				</ul>
			</div>
			<span>New Arrival</span>
			<div className='movie__list'>
				<ul className="movie__grid">
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
				</ul>
			</div>
			<span>Featured Cast</span>
			<div className='cast__list'>
				<ul className="cast__grid">
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
					<Card cast={false}/>
				</ul>
			</div>
		</div>
	)
}

export default HomePage
