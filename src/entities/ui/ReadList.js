import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from "../api/fetchPosts";

const ReadList = () => {

    const [list, setList] = useState([]);
    const [totalPages,setTotalPages]=useState(0)
    const [currPage,setCurrPage]=useState(1)

    useEffect(() => {
        getList(currPage)
        .then(data => {
            console.log(data)
            setList(data.content)//불러온 데이터를 상태에 저장
            setTotalPages(data.totalPages)//총페이지수==마지막페이지번호
            setCurrPage(data.number+1)
        })    
    }, [currPage])

    return (<>
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
        <Pagination currPage={currPage} totalPages={totalPages} setCurrPage={setCurrPage}/>
        </>)
}

////////////////////////////////////////////////
function Pagination({currPage, totalPages, setCurrPage}){
    return (
    <div style={{ textAlign: 'center' }}>
        <button disabled={currPage === 1} onClick={()=>setCurrPage(currPage-1<1?1:currPage-1)}>&lt;</button>
        <strong>{currPage}</strong> / <span>{totalPages}</span>
        <button disabled={currPage === totalPages} onClick={()=>setCurrPage(currPage+1>totalPages?totalPages:currPage+1)}>&gt;</button>
    </div>
    )
}

export default ReadList;
