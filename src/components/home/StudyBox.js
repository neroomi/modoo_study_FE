import React, {Component} from 'react';
// import ".../assets/css/studyBox.css"


// const tags = ['NCS', '컴퓨터', 'TOEIC'];
const boxstyle = {
    border: '1px solid gray',
    borderRadius: '1em',
    color: 'blue',
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
    padding: '5px',
    margin: '5px'
}
const tagTd = {
    display: 'flex',
    justifyContent: 'space-evenly'
}
const tagstyle = {
    margin: '0px 2px',
    color: 'rgb(255, 255, 255)',
    padding: '3px 6px',
    fontSize: '0.8em',
    borderRadius: '0.3rem',
    backgroundColor: 'rgb(0, 181, 173)',

}



class StudyBox extends Component {        
    render(){
        const keywords = ["변수", "리스트", "네"];
        const keyword = []
        for (const [index, value] of keywords.entries()){
            keyword.push(<text className="tag" style={tagstyle} key={index}>{value}</text>)
        }
        return(
            <div>
                <div className="studyBox" style={boxstyle}>
                    <div className="studyContents">
                        <table className="studyBox-table">
                            <tr>
                                <td><strong>스터디제목</strong></td>
                            </tr>
                            <tr>
                                <td className="tag-td" style={tagTd}>{keyword}</td>
                            </tr>
                            <tr>
                                <tr>인원</tr>
                                <tr>기간</tr>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
 
}

export default StudyBox;
