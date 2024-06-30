import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Slider.scss'

const MovieSlider = ({ data = [] }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	console.log(data)

	return (
		<div className="slider__container">
			<h2>Recommendations</h2>
			<Slider {...settings}>
				{data.map(movie => (
					<div key={movie.id} className="slider__slide" >
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
						<div className="slider__title">{movie.title}</div>
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
