import React from 'react';
// import ".../assets/css/studyBox.css"

function StudyBox({study}){
    const { title, keyword, parties, period} = study || {};
    const boxstyle = {
        border: '1px solid gray',
        borderRadius: '1em',
        color: 'blue',
        display: 'flex',
        width: '30%',
        padding: '5px',
        margin: '5px'
    }
    const tagstyle = {
        margin: '0px 2px',
        color: 'rgb(255, 255, 255)',
        padding: '3px 6px',
        fontSize: '0.8em',
        borderRadius: '0.3rem',
        backgroundColor: 'rgb(0, 181, 173)',
    
    }
    return (
        <div>
            <div className="studyBox" style={boxstyle}>
                <div className="studyContents">
                    <table className="studyBox-table">
                        <tr>
                            <td><strong>스터디제목{title}</strong></td>
                        </tr>
                        <tr>
                            <td><text className="tag" style={tagstyle}>태그{keyword}</text></td>
                        </tr>
                        <tr>
                            <td>인원{parties}</td>
                            <td>기간{period}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );    
}

export default StudyBox;