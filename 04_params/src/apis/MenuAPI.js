import menus from "../data/menu-detail.json";

// 메뉴 데이터 전체 조회
export function getMenuList() {
    console.log('menus', menus);
    return menus;
}

// 메뉴 데이터 상세 조회
export function getMenuByMenuCode(menuCode) {
    /* path variable인 menuCode를 전달 받고 있다.
    단 여기서 주의점, url 데이터는 문자열이므로 consol.log 구문으로 타입을 확인해보자 */
    console.log(typeof menuCode);

    /* 배열의 filter 메소드는, menus 라는 배열에서 콜백함수가 true 인 요소만 반환해주는 기능*/
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
    // menuCdoe와 일치하는 애만 새 배열로 반환

}

//menuName을 전달 받아서 이거에 필터링 거는 함수
export function searchMenu(searchMenuName) {
    /* match() 메소드: 포함 여부에 다라서 인수 값이 포함되어 있으면 객체를 반환 */
    // console.log('abc', match('ab'));
    // 검색어인 searchMenuName에 포함되는 값을 가지는 menu 객체를 반환
    return menus.filter(menu => menu.menuName.match(searchMenuName))
};