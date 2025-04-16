import { getMenuByMenuCode } from "../apis/MenuAPI";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

//메뉴 상세 컴포넌트
function MenuDetail() {

    const {menuCode} = useParams();
    // console.log('menuCode', menuCode);

    // 초기값 지정
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(() => {
        setMenu(getMenuByMenuCode(menuCode)); // usePrams로 꺼내온 값을 쓸 것
    }, []);

    return(
        <>
            <h1>{menu.menuName}상세 페이지!</h1>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoryName}</h3>
            <h3>메뉴 설명: {menu.detail.description}</h3>
            <img src={menu.detail.image} style={{maxWidth:500}}/>
        </>
    );

}
export default MenuDetail;