import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li><Link to="/">스터디 목록</Link></li>
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/studymanagement">내 스터디 관리</Link></li>
            </ul>
            <hr/>
            <ul className="submenu">
                <li><Link to="/signinmodal">로그인/회원가입</Link></li>
                <li><Link to="/">알림</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;


// class Menu extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             mode:'loggedout',
//             loggedout:{title:'로그인/회원가입'},
//             loggedin:{title:'로그아웃'},
//         }
//     }
//     render(){
//         var _title = null;
//         if(this.state.mode === 'loggedout'){
//             _title = this.state.loggedout.title;
//         } else if(this.state.mode === 'loggedin'){
//             _title = this.state.loggedin.title;
//         }
//         return(
//             <div>
//                 <ul>
//                     <li><a href="/">스터디 목록</a></li>
//                     <li><a href="/community">커뮤니티</a></li>
//                     <li><a href="/studymanagement">내 스터디 관리</a></li>
//                 </ul>
//                 <hr/>
//                 <ul>
//                     <li><a href="/">{this.state.loggedout.title}</a></li>
//                     {/* 여기에서 로그인 상태에 따라 바뀌게 */}
//                     <li><a href="/">알림</a></li>
//                     <li><a href="/mypage">마이페이지</a></li>
//                 </ul>
//                 <hr/>
//             </div>
//         );
//     }
// }
// export default Menu;