import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 coconut. All rights reserved.</p>
            <ul className="social-links">
                <li><Link to="/">페이스북</Link></li>
                <li><Link to="/">트위터</Link></li>
                <li><Link to="/">인스타그램</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;