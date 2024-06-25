import './SearchPanel.scss'

const SearchPanel = () => {
	return (
		<div className="search__panel">
			<input
				type="text"
				placeholder="Search for movies..."
			/>
			<button>
				Search
			</button>
		</div>
	)
}

export default SearchPanel
