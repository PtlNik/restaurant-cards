
function Header() {
    return (
        <header className="site-header">
            <a className="brand" href="#home">
                <span className="brand-icon">✦</span>
                Taste<span>Trail</span>
            </a>

            <nav>
                <a href="#home">Home</a>
                <a href="#restaurants">Restaurants</a>
            </nav>

            <a className="header-button" href="#restaurants">
                Explore Food ↗
            </a>
        </header>
    );
}

export default Header;
