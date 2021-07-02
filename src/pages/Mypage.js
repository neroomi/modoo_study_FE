import React, {Component} from 'react';
import Interest from "./components/Interest";

class Mypage extends Component{
    render() {
        return (
            <div>
                <h1>여기는 마이페이지</h1>
                <Menu></Menu>
                <Interest></Interest>
            </div>
        );
    }

}
export default Mypage;
