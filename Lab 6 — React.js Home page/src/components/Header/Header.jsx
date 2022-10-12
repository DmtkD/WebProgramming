import './Header.css';
import logo from '../../assert/img/logo.png'

function Header() {
    return (
        <header className="Header">
            <img src={logo} alt="logo" className="LogoHeader"/>
            <nav>
                <ul>
                    <li><a href="/"> Home </a></li>
                    <li><a href="/"> Catalog </a></li>
                    <li><a href="/"> Cart </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;