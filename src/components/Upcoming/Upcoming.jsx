import { useState } from "react";

import { GetUpcoming } from "../../API/GetUpcoming";
import Card from "../card/Card";


const Upcoming = () => {
	const [nextPage, setNextPage] = useState(1);
	const { upcomingMovies } = GetUpcoming(nextPage);

	return (
		<div className="movie__list">
			<h2 className="list__title">UPCOMING</h2>
			<div className="list__cards">
				{
					upcomingMovies.map(movie => (
						<Card movie={movie} />
					))
				}
			</div>
			<div className='button__block'>
				{nextPage !== 1 ? <button onClick={() => {
					setNextPage(nextPage - 1);
				}} className='button__prev'>
					Page {nextPage - 1}
					<svg aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="arrow-left"
						className="svg-inline--fa fa-arrow-left fa-w-14 fa-1x "
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512" style={{ marginLeft: "10px" }}>
						<path fill="currentColor"
							d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9
								0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4
								24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6
								216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24
								24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
						</path>
					</svg>
				</button> : ''}
				<button className='button__next ' onClick={() => {
					setNextPage(nextPage + 1);
				}}>
					Page {nextPage + 1}
					<svg aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="arrow-right"
						className="svg-inline--fa fa-arrow-right fa-w-14 fa-1x "
						role="img" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512" style={{ marginLeft: '10px' }}>
						<path fill="currentColor"
							d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441
								239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6
								9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4
								296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9
								101.2c-9.8-9.3-10-24.8-.4-34.3z">
						</path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Upcoming;