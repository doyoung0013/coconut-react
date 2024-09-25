import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../components/main.css';
import { useState } from "react";

function BoardWritePage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        writer: "",
        content: ""
    });

    // 입력 값 변경 처리 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const saveForm = async () => {
        const response = await fetch ("http://localhost:8080/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("게시글 등록 성공:");
            navigate(-1);
        } else {
            console.error("게시글 등록 실패:", response.status);
        }
    };

    return (
        <>
            <Header />
            <div className="board-header">
                <h1 className="board-title">게시판</h1>
                <div className="button-container">
                    <Link to={"/boards"}><button className="edit-button">돌아가기</button></Link>
                </div>
            </div>
            <hr className="divider" />
            <div className="form-container">
                <h2>게시글 작성</h2>
                <form>
                    <label htmlFor="title">제목:</label>
                    <input type="text" id="title" name="title" onChange={handleChange} required />

                    <label htmlFor="author">작성자:</label>
                    <input type="text" id="writer" name="writer" onChange={handleChange} required />

                    <label htmlFor="content">내용:</label>
                    <textarea id="content" name="content" rows="10" onChange={handleChange} required></textarea>

                    <button type="button" className="submit-button" onClick={saveForm}>게시글 등록</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default BoardWritePage;
