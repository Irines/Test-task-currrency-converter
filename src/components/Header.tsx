import '../styles/header.sass';
function Header() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <a href="#" className="brand">
                    <img src="https://cdn-icons-png.flaticon.com/512/6204/6204191.png"></img>
                </a>
                <h5>currency exchange</h5>
            </div>
        </nav>
    );
}

export default Header;