import React, { Component } from "react";
import StudyBox from "./StudyBox";
import "../../assets/css/studyList.css";


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





const Section = () => {
    return(
        <section className="category">
            <h4 className="category-title">category</h4>
            <div className="category-box-area">
                <StudyBox studies={studies}/>

            </div>
        </section>
    )
}


class StudyList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {studyInfo: studies};
    // }

    render() {
        return(
            <div className="studyList">
                <Section/>

            </div>
        );
    };
}
export default StudyList;


