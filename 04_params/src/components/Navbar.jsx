import {Link} from "react-router-dom";

function Navbar() {

    return(
        <>
            <div>
                <ul> 
                    <li><Link to ="/main">메인</Link></li>
                    <li><Link to ="/about">소개</Link></li>
                    <li><Link to ="/menu">메뉴</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;