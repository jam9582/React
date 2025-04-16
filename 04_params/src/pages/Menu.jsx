import {useState, useEffect} from "react";
import { getMenuList } from "../apis/MenuAPI";
import MenuItem from "../items/MenuItem";
import boxStyle from "./Menu.module.css";
import {useNavigate} from "react-router-dom";

function Menu() {

    // 관리 할 input 값
    const [searchValue, setSearchValue] = useState("");

    // 관리 할 메뉴 배열, 상태값
    const [menuList, setMenuList] = useState([]);

    // 네비게이션 기능 사용할 변수 선언
    const navigate = useNavigate();

    // useEffect는 하나의 콜백함수와 의존성 배열을 인자로 갖음
    useEffect(() => {
        //Menu 컴포넌트가 마운트 되기 전에 데이터를 가져와 state에 담기
        setMenuList(getMenuList());
    }, [])

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    // 쿼리 스트링 파라미터로 검색값 전달, path variable 다뤄봤으니 얘도 안 다뤄보면 섭섭함, ? 뒤에 오는 값을 쿼리 스트링 파라미터라고 함, url을 통해 값을 전달하는 방법
    const onClickHandler= () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    }

    return(
        <>
            <h1>판매 가능한 메뉴!</h1>
            <div>
                <input type="search" name="menuName" onChange={onChangeHandler}/> 
                {/* 위에 애가 e.target임 */}
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default Menu;