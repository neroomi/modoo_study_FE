import React from 'react';
import PresentList from "../components/studymanagement/PresentList"
import FutureList from "../components/studymanagement/FutureList";
import PastList from "../components/studymanagement/PastList";
import {Link, Route} from "react-router-dom";
import PresentStudy from "../components/studymanagement/PresentStudy";

var contents=[
    {id:1, title:"스터디1",description:"짱구"},
    {id:2, title:"스터디2",description:"철수"}
]


const StudyManagement = (props) => {

    var list=[];
    for(var i=0;i<contents.length;i++){
        list.push(<li><Link to={'/studymanagement/'+contents[i].id}>{contents[i].title}</Link></li>)
    }

    return (
        <div>
            <h2>진행중인 스터디 목록</h2>
            {list}
            {/*<PresentList/>*/}
            <FutureList/>
            <PastList/>
            <Route path="/studymanagement/:study_id">
                <PresentStudy/>
            </Route>
            {/*<Route exact path={props.url} render={()=>(<h3>Please select any study</h3>)}/>*/}
            {/*<Route path={`${props.url}/:id`} component={PresentStudy}/>*/}


        </div>
    );
};

export default StudyManagement;