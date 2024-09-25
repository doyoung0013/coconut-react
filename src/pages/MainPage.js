import { Link } from "react-router-dom";
import MyLayout from "../components/MyLayout";


const MainPage=()=>{
    return(
    <>
        <MyLayout>
        <h1>MainPage...</h1>
        <b><Link to="/boards" className="boardName">게시글 보기</Link></b>
        </MyLayout>
    </>);
}

export default MainPage;