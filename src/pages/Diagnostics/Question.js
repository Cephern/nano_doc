function Question({ question }) {
	return (
		<div className="question">
			<h4>{question.body}</h4>

			<div className="answers">
				<button>{question.asw1}</button>
				<button>{question.asw2}</button>
				<button>{question.asw3}</button>
				<button>{question.asw4}</button>
			</div>
		</div>
	);
}
export default Question;
