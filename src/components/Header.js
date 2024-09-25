import { Link } from 'react-router-dom';
import './header.css'

function Header(){
    return (
        <header>
            <Link  className='companyName' to="/"><h1>COCONUT</h1></Link>
            <ul className="wrap">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/signup">회원가입</Link></li>
                <li><Link to="/signin">로그인</Link></li>
            </ul>
        </header>
    )
}

export default Header;