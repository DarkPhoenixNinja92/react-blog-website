import { Review } from "../Data/Review";

const ReviewItem = () => {
    return (
        <div>
        <div className="review-card">
        <h2 className="title">{Review[0].reviewer}</h2>
        <h3 className="review-date">Review Posted On {Review[0].date}</h3>
        <p className="review-txt">{Review[0].review}</p>
        </div>
        </div>
    )
}

export default ReviewItem;