import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../components/main.css'
import ReadList from "../entities/ui/ReadList";

function BoardPage(){

    return(
        <>
            <Header />
            <div className="board-header">
                <h1 className="board-title">게시판</h1>
                <div className="button-container">
                    <Link to={"/boards/registration"}><button className="edit-button">작성</button></Link>
                </div>
            </div>
            <hr className="divider" />
            <ReadList />
            <Footer />
        </>
    )
}

export default BoardPage;