import React, {Component} from 'react';
import "../../assets/css/studyBox.css"



const studies = [
    {
        title: "면접스터디",
        tags: ["NCS", "IT", "영어"],
        person: ["10", "20"],
        period: ["2021-08-01", "2021-08-30"]
    },
    {
        title: "코딩스터디",
        tags: ["컴퓨터", "IT", "개발",],
        person: ["7", "10"],
        period: ["2021-07-01", "2021-07-30"],
    },
    {
        title: "영어스터디",
        tags: ["회화", "언어", "토익"],
        person: ["5", "8"],
        period: ["2021-06-01", "2021-06-30"]
    },
    {
        title: "자격증스터디",
        tags: ["IT", "기사", "자격증"],
        person: ["8", "10"],
        period: ["2021-05-01", "2021-05-30"]
    },
]

function StudyTags({multiTags}){
    console.log(multiTags);
    const singleTag = [];
    for (const [index, value] of multiTags.entries()){
       singleTag.push(<span className="tag" key={index}>{value}</span>)
   }
    return(
        <>{singleTag}</>
    );
}
function StudyPerson({persons}){
    const currentPerson = [];
    const maxPerson = [];
    for (const [index, value] of persons.entries()){
        if(index === 0){
            currentPerson.push(<text key={index}>{value}</text>)
        } else {
            maxPerson.push(<text key={index}>{value}</text>)
        }
    }
    return (
        <>{currentPerson} / {maxPerson} 명 </>
    );
}
function StudyPeriod({period}){
    const startDate = [];
    const endDate = [];
    for (const [index, value] of period.entries()){
        if(index === 0){
            startDate.push(<text key={index}>{value}</text>)
        } else {
            endDate.push(<text key={index}>{value}</text>)
        };
    }
    return (
        <>{startDate} ~ {endDate}</>
    );
}

function StudyContents({title, tags, person, period}){
    return(
        <div className="studyBox">

            <div className="studyContents">
                <table className="studyBox-table">
                    <tr>
                        <td className="studyBox-td-title">
                            {title}
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-tag">
                            <StudyTags multiTags={tags}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-person">
                            <StudyPerson persons={person}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-period">
                            <StudyPeriod period={period}/>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}


function StudyBox() { 
    return(
        <div>
            {studies.map(studyInfo => (
                <StudyContents
                    title={studyInfo.title}
                    tags={studyInfo.tags}
                    person={studyInfo.person}
                    period={studyInfo.period}/>
            ))}
        </div>
    );

}

export default StudyBox;


// class StudyBox extends Component { 
//     constructor(props){
//         super(props);
//         this.state = {studies};
//     }       
//     render(){
//         const keywords = [this.state.tags];
//         const keyword = []
//         for (const [index, value] of keywords.entries()){
//             keyword.push(<text className="tag" key={index}>{value}</text>)
//         }
//         return(
//             <div>
//                 <div className="studyBox">
//                     <div className="studyContents">
//                         <table className="studyBox-table">
//                             <tr>
//                                 <td className="studyBox-td-title">스터디제목</td>
//                             </tr>
//                             <tr>
//                                 <td className="studyBox-td-tag">{keyword}</td>
//                             </tr>
//                             <tr className="studyBox-tr-1">
//                                 <td className="studyBox-td-person">10명</td>
//                                 <td
//                                 className="studyBox-td-period">2021-07-01 ~ 2021-07-31</td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
 
// }

// export default StudyBox;
