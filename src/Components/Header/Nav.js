import logo from '../../images/Logo.svg';

function Nav(){
    return(
        <nav>
            <div className="nav-logo-container">
                <img
                    src={logo}
                    alt="Little Lemon Logo"
                />
            </div>
            <ul>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER</li>
                <li>ONLINE</li>
            </ul>
            <ul className="login" >
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}

export default Nav;