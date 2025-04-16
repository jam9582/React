/*
라우팅
- 어떠한 요청을 어디로 안내 및 매핑을 시킬지 정해놓고 진행하는 것
- 리액트에서는 요청에 따라 요청에 매핑된 컴포넌트를 rendering 하게 된다

명령어 입력
npm install react-router-dom 

react-router-dom의 주요 모듈
1. BrowserRouter: 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
2. Routes: route들을 묶어주는 단위 컴포넌트
3. Route: url 요청 주소와 컴포넌트들을 매핑해주는 단위 컴포넌트

*/

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Order from './pages/Order';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element = {<Main/>}/> */}
          <Route path = '/' element = {<Main/>}/>
          <Route path = '/menu' element = {<Menu/>}/>
          <Route path = '/order' element = {<Order/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
