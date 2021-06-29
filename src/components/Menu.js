import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/studylist">스터디 목록</Link></li>
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/studymanagement">내 스터디 관리</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;