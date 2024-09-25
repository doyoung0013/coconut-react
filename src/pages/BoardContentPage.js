import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../components/main.css';
import ReadDetail from "../entities/ui/ReadComponent";
import { useCallback } from "react";

function BoardContentPage() {
    const {pno} = useParams();
    const navigate = useNavigate();
    const moveToModify = useCallback((pno)=>{
        navigate({pathname:`/boards/update/${pno}`});
    }, []);

    const deleteProcess = async () => {
        const response = await fetch (`http://localhost:8080/api/posts/${pno}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log("게시글 삭제 성공:");
            navigate(-1);
        } else {
            console.error("게시글 삭제 실패:", response.status);
        }
    };

    return (
        <>
            <Header />
            <div className="board-header">
                <h1 className="board-title">게시판</h1>
                <div className="button-container">
                    <button className="edit-button" onClick={()=>moveToModify(pno)}>수정</button>
                    <button className="delete-button" onClick={deleteProcess}>삭제</button>
                </div>
            </div>
            <hr className="divider" />
            <ReadDetail pno={pno}/>
            <Footer />
        </>
    );
}

export default BoardContentPage;
