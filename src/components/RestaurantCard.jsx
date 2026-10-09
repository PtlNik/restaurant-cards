
import Badge from "./Badge";
import RatingStars from "./RatingStars";

function RestaurantCard({ restaurant }) {
    return (
        <article className="restaurant-card">
            <div className="card-image-container">
                <img
                    className="card-image"
                    src={restaurant.image}
                    alt={restaurant.name}
                />
                <span className="price-tag">{restaurant.price}</span>
            </div>

            <div className="card-content">
                <div className="card-heading">
                    <h2>{restaurant.name}</h2>
                    <RatingStars rating={restaurant.rating} />
                </div>

                <div className="badge-row">
                    <Badge>{restaurant.cuisine}</Badge>
                </div>

                <p className="location">
                    <span>📍</span> {restaurant.location}
                </p>

                <p className="description">{restaurant.description}</p>

                <button
                    className="details-button"
                    onClick={() =>
                        alert(`You selected ${restaurant.name}!`)
                    }
                >
                    View Restaurant <span>→</span>
                </button>
            </div>
        </article>
    );
}

export default RestaurantCard;
