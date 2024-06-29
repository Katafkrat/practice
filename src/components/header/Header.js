import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
	return (
		<header>
			<Link to={'/'}>
				<div className="logo">
					<a href="#">
						MovieHostage
					</a>
				</div>
			</Link>
			<nav>
			</nav>
			<div className="signIn">
				<a href="#">
					Sign in
				</a>
			</div>
		</header>
	)
}

export default Header
