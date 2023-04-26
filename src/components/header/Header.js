import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <nav className='nav'>

                <div className="heading">
                    <h1>TravelD</h1>
                </div>

                <ul className="nav-links">
                    <li><Link to="/" className="active">Home</Link></li>
                    
                </ul>

            </nav>
        </>
    )

}

export default Header;