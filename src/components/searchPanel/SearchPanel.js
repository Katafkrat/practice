import { useState, useEffect } from 'react'
import { useDebounce } from "@uidotdev/usehooks"

import './SearchPanel.scss'

const SearchPanel = ({ onSubmit }) => {
	const [input, setInput] = useState('')
	const debouncedSearchTerm = useDebounce(input, 500)

	const handleInputChange = event => {
		setInput(event.target.value)
	}

	useEffect(() => {
		onSubmit(debouncedSearchTerm)
	}, [debouncedSearchTerm])

	return (
		<div className="search__panel">
			<input
				type="text"
				placeholder="Search for movies..."
				value={input}
				onChange={handleInputChange}
			/>
		</div>
	)
}

export default SearchPanel
