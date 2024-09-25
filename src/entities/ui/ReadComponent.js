import { useEffect, useState } from "react";
import { getDetail } from "../api/fetchPosts";

const initState = {
    pno:0, 
    title:'',
    content:'',
    writer:'',
    updatedAt:null
}

const ReadDetail = ({pno}) => {

    const [post, setPost] = useState(initState);

    useEffect(()=>{
        getDetail(pno)
        .then(data=>{
            console.log(data);
            setPost(data);
            console.log("post: ", post)
        })    
    }, [pno])

    return (<>

        <div className="post-container">
            <h1>{post.title}</h1>
            <p className="post-meta">작성자: {post.writer} | 날짜: {post.updatedAt} | 글번호 : {post.pno}</p>
            <p className="post-content">
                {post.content}
            </p>

        </div>

        </>)
}

export default ReadDetail;