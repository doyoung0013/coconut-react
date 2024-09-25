import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../components/main.css';
import { useEffect, useState } from "react";
import { getDetail } from "../entities/api/fetchPosts";

const initState = {
    pno:0, 
    title:'',
    content:'',
    writer:'',
    updatedAt:null
}

function BoardWritePage() {
    const {pno} = useParams();
    const [post, setPost] = useState(initState);
    const [formData, setFormData] = useState({
        pno: "",
        title: "",
        writer: "",
        content: ""
    });

    useEffect(()=>{
        getDetail(pno)
        .then(data=>{
            console.log(data);
            setPost(data);
            setFormData({ // 수정: formData를 post로 초기화
                pno: data.pno,
                title: data.title,
                writer: data.writer,
                content: data.content
            });
        })    
    }, [pno])
    
    const navigate = useNavigate();

    // 입력 값 변경 처리 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const updateProcess = async () => {
        console.log(formData);
        const response = await fetch ("http://localhost:8080/api/posts", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("게시글 수정 성공:");
            navigate(-1);
        } else {
            console.error("게시글 수정 실패:", response.status);
        }
    };

    return (
        <>
            <Header />
            <div className="board-header">
                <h1 className="board-title">게시판</h1>
                <div className="button-container">
                    <Link to={"/boards"}><button className="edit-button">취소</button></Link>
                </div>
            </div>
            <hr className="divider" />
            <div className="form-container">
                <h2>게시글 작성</h2>
                <form>
                    <label htmlFor="title">제목:</label>
                    <input type="text" id="title" name="title" onChange={handleChange} value={formData.title} required />

                    <label htmlFor="author">작성자:</label>
                    <input type="text" id="writer" name="writer" onChange={handleChange} value={formData.writer} required />

                    <label htmlFor="content">내용:</label>
                    <textarea id="content" name="content" rows="10" onChange={handleChange} value={formData.content} required></textarea>

                    <button type="button" className="submit-button" onClick={updateProcess}>게시글 등록</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default BoardWritePage;
