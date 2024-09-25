import { lazy, Suspense } from "react"; //이 부분은 안써도 상관 없긴 함
import { createBrowserRouter } from "react-router-dom";
import Signup from '../pages/SignupPage';
import Signin from '../pages/SigninPage';
import Board from '../pages/BoardPage';
import BoardContent from '../pages/BoardContentPage';
import BoardWritePage from '../pages/BoardWritePage';
import BoardUpdatePage from '../pages/BoardUpdatePage';

const Loading=<div className="loader">Loading...</div>

const Main=lazy(()=>import("../pages/MainPage")); //이 페이지를 지연로딩. 지연시 대체 수단을 제공할 수 있음.

const root=createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={Loading}><Main/></Suspense> //<Suspense> : 리액트에서 제공하고 있는 페이지용 컴포넌트 (로딩 옵션 제공하기 위해 사용)
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/signin",
        element:<Signin/>
    },
    {
        path:"/boards",
        element:<Board/>
    },
    {
        path:"/boards/:pno",
        element:<BoardContent/>
    },
    {
        path:"/boards/registration",
        element:<BoardWritePage/>
    },
    {
        path:"/boards/update/:pno",
        element:<BoardUpdatePage/>
    }
]);

export default root;