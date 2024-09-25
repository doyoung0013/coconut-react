import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SigninPage=()=>{
    return(<>
    <Header />
    <h1>SigninPage...</h1>
    <Link to="/signup">회원가입</Link>
    <Footer />
    </>);
}

export default SigninPage;