import React, {Component} from 'react';
import "../../assets/css/studyBox.css"


// const tags = ['NCS', '컴퓨터', 'TOEIC'];


class StudyBox extends Component {        
    render(){
        const keywords = ["변수", "리스트", "네"];
        const keyword = []
        for (const [index, value] of keywords.entries()){
            keyword.push(<text className="tag" key={index}>{value}</text>)
        }
        return(
            <div>
                <div className="studyBox">
                    <div className="studyContents">
                        <table className="studyBox-table">
                            <tr>
                                <td className="studyBox-td-title">스터디제목</td>
                            </tr>
                            <tr>
                                <td className="studyBox-td-tag">{keyword}</td>
                            </tr>
                            <tr className="studyBox-tr-1">
                                <td className="studyBox-td-person">10명</td>
                                <td
                                className="studyBox-td-period">2021-07-01 ~ 2021-07-31</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
 
}

export default StudyBox;
