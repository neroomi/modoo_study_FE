import React, {useState} from 'react';
import PresentList from "../components/studymanagement/PresentList"
import FutureList from "../components/studymanagement/FutureList";
import PastList from "../components/studymanagement/PastList";
import {Link, Route} from "react-router-dom";
import PresentStudy from "../components/studymanagement/PresentStudy";

var contents=[
    {id:1, title:"스터디1",description:"짱구",finish:false},
    {id:2, title:"스터디2",description:"철수",finish:false},
    {id:3, title:"스터디3",description:"유리",finish:true},
    {id:4, title:"스터디4",description:"맹구",finish:true},
    {id:5, title:"스터디5",description:"훈이",finish:true},
]


function StudyManagement(props){
    const [present,setPresent]=useState([]);
    const [past,setPast]=useState([]);
    var presentList=[];
    var pastList=[]
    var list=[]
    for(var i=0;i<contents.length;i++){
        list.push(<li><Link to={'/studymanagement/'+contents[i].id}>{contents[i].title}</Link></li>)
        // if(contents[i].finish===false){
        //     presentList.push(<li><Link to={'/studymanagement/'+contents[i].id}>{contents[i].title}</Link></li>)
        // }else{
        //     pastList.push(<li><Link to={'/studymanagement/'+contents[i].id}>{contents[i].title}</Link></li>)
        // }

    }
    // setPresent(presentList)
    // setPast(pastList)

    return (
        <div>
            <PresentList list={list}/>
            {/*<FutureList/>*/}
            <PastList />
            <Route exact path="/studymanagement/:study_id">
                <PresentStudy/>
            </Route>


        </div>
    );
};

export default StudyManagement;