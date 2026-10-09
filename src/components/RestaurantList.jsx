
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants }) {
    return (
        <section className="restaurant-grid">
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                />
            ))}
        </section>
    );
}

export default RestaurantList;
