import React, { Component } from "react";
import StudyBox from "./StudyBox";
import "../../assets/css/studyList.css";


const Section = () => {
    return(
        <section className="category">
            <h4 className="category-title">category</h4>
            <div className="category-box-area">
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
            </div>
        </section>
    )
}


function StudyList(props){
    return(
        <div className="studyList">
            <Section/>
            <Section/>
            <Section/>
        </div>
    );
}
export default StudyList;



// class StudyList extends Component {



// }