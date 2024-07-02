import { useState } from 'react'

import './SearchPanel.scss'

const SearchPanel = ({ onSubmit }) => {
	const [input, setInput] = useState('')

	const handleInputChange = event => {
		setInput(event.target.value)
	}

	return (
		<div className="search__panel">
			<input
				type="text"
				placeholder="Search for movies..."
				value={input}
				onChange={handleInputChange}
			/>
			<button onClick={() => onSubmit(input)}>
				Search
			</button>
		</div>
	)
}

export default SearchPanel
