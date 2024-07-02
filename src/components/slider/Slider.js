import React, { useState } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Slider.scss'

const MovieSlider = ({ data = [] }) => {
	const [isScrolling, setIsScrolling] = useState(false)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		focusOnSelect: false,
		arrows: true,
		beforeChange: () => setIsScrolling(true),
		afterChange: () => setIsScrolling(false),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					arrows: false
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false
				},
			},
		],
	}

	return (
		<div className="slider__container">
			<h2>Recommendations</h2>
			<Slider key={data?.length} {...settings}>
				{data?.map(movie => (
					<div key={movie.id} className="slider__slide">
						<Link to={`/movie/${movie?.id}`} onClick={e => isScrolling && e.preventDefault()}>
							<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
							<div className="slider__title">{movie.title}</div>
						</Link>
					</div>
				))}
			</Slider>
		</div>
	)
}

MovieSlider.propTypes = {
	data: PropTypes.array.isRequired,
}

export default MovieSlider
