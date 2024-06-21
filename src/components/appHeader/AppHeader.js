import './AppHeader.scss'

const AppHeader = () => {
	return (
		<header className="app__header">
				<div className="app__logo">
					<a href="#">
						MovieHostage
					</a>
				</div>
				<div className="app__signIn">
					<a href="#">
						Sign in
					</a>
				</div>
			<div className="app__movie">
				Movie
			</div>
			<div className="app__movieDescription">
				Desctiption
			</div>
		</header>
	)
}

export default AppHeader;