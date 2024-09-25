import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from "../api/fetchPosts";

const ReadList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getList()
        .then(data => {
            setList(data); // 불러온 데이터를 상태에 저장
        })    
    }, [])

    return (
        <ul className="post-list">
            {list.map((item) => (
                <li className="post-item" key={item.pno}> 
                    <Link to={`/boards/${item.pno}`} className="post-link">
                        <h2>{item.title}</h2>
                        <p>작성자: {item.writer} | 날짜: {item.updatedAt}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ReadList;
