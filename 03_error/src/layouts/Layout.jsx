import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

/*
<outlet>
- react-router-dom에서 제공하는 기능
- 라우팅 된 컴포넌트를 렌더링 하는 컴포넌트
- 중첩 라우팅을 적용할 때 사용하게 되며, url 요청 주소에 따라서 자식 컴포넌트를 렌더링 하는 역할을 함
*/

function Layout() {

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/> 
        </>
    )
}

export default Layout;