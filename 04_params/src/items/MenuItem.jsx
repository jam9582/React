import itemStyle from "./MenuItem.module.css";
import { Link } from "react-router-dom";

// 구조분해 할당으로 넘겨받은 menu 정보
function MenuItem({menu}) {
    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.MenuItem}>
                <h3>메뉴 이름: {menu.menuName}</h3>
                <h3>메뉴 가격: {menu.menuPrice}</h3>
                <h3>메뉴 종류: {menu.categortName}</h3>
            </div>
        </Link>
    );
}

export default MenuItem;