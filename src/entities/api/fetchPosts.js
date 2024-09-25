export const API_SERVER_HOST = 'http://localhost:8080'
const prefix = `${API_SERVER_HOST}/api/posts`

//getDetail이라는 함수를 호출할때 data를 반환
export const getDetail = async (pno) => {
    const response = await fetch(`${prefix}/${pno}`);
    const data = await response.json();
    return data;
}

export const getList = async () => {
    const response = await fetch(`${prefix}`);
    const data = await response.json();
    return data;
}

export const savePost = async(saveData) => {
    const response = await fetch(`${prefix}`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(saveData)
    });
    const data = await response.json();
    return data;
}