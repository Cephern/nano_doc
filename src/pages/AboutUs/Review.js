const Review = ({ review }) => {
	return (
		<div className="review">
			<h4>
				Отзыв от <span className="fio">{review.name}</span>
			</h4>
			<p>{review.text}</p>
		</div>
	);
};

export default Review;
