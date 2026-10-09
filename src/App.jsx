import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import restaurants from "./data/restaurants.js";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />

            <main className="container">
                <section className="hero">
                    <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                    <h1>
                        Discover Amazing <span>Restaurants</span>
                    </h1>
                    <p>Find your next favourite place to eat.</p>
                </section>

                <section className="restaurants">
                    <h2>Restaurants to Discover</h2>

                    <div className="restaurant-grid">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                © 2026 TasteTrail · Made with a love for food.
            </footer>
        </div>
    );
}

export default App;