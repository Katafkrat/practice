import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
	return (
		<header>
			<Link to={'/'}>
				<div className="logo">
					MovieHostage
				</div>
			</Link>
		</header>
	)
}

export default Header
