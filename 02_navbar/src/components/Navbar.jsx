// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

/*
- NavLink 컴포넌트는 Link와 사용법은 거의 유사하지만 Nav의 상태가 active 인지에 대한 값을 이용하여 스타일을 조작하건 카르래스 이름 변경 가능
- 내가 눌렀냐 마느냐의 active라는 하나의 속성이 추가된거라 생각하면 됨
*/

function Navbar() {

    const activeStyle = {
        background : 'red',
        color : 'white'
    }

    return(
        <>
            {/* <div>
                <ul>
                    <li><Link to='/main'>메인</Link></li>
                    <li><Link to='/menu'>메뉴</Link></li>
                    <li><Link to='/order'>주문</Link></li>
                </ul>
            </div> */}

<div>
                <ul>
                    <li><NavLink to='/main' style={({isActive})=> isActive ? activeStyle : undefined}>메인</NavLink></li>
                    <li><NavLink to='/menu' style={({isActive})=> isActive ? activeStyle : undefined}>메뉴</NavLink></li>
                    <li><NavLink to='/order' style={({isActive})=> isActive ? activeStyle : undefined}>주문</NavLink></li>
                </ul>
            </div>

        </>
    )
}

// 다른 곳에서 사용할 수 있게끔 export 설정 필수
export default Navbar;