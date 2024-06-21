import './Header.scss'

const Header = () => {
	return (
		<header>
				<div className="logo">
					<a href="#">
						MovieHostage
					</a>
				</div>
				<div className="signIn">
					<a href="#">
						Sign in
					</a>
				</div>
			<div className="movie">
				Movie
			</div>
			<div className="movieDescription">
				Desctiption
			</div>
		</header>
	)
}

export default Header;