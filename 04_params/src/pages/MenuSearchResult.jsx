import { searchMenu } from "../apis/MenuAPI";
import {useState, useEffect} from "react";
//쿼리 스트링 꺼내올 때 사용하는 hooks
import {useSearchParams} from "react-router-dom";
import MenuItem from "../items/MenuItem";

function MenuSearchResult() {

    /* 쿼리스트링 파라미터는 여러 값들을 전달할 수 있기 때문에 배열 형태로 key-value 로 저장되어있음 */
    const [searchParam] = useSearchParams();
    console.log(searchParam); // 이러면 지금 size 1나옴, url 뒤에  = 123만 있기 때문엔데 이 뒤에 &블라 &블라 가 되면 size 늘어남
    // 쿼리스트링 값 추출 방법 get("key")
    const menuName = searchParam.get('menuName');
    // 검색 된 메뉴 관리 할 상태값 배열
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(searchMenu(menuName));
    }, []);

    return(
        <>
            <h1> 검색결과!</h1>
            <div>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;