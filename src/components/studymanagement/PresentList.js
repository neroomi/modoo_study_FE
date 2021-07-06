import React from 'react';
import {Link, Route,useParams} from "react-router-dom";

var contents=[
    {id:1, title:"스터디1",description:"짱구",finish:false},
    {id:2, title:"스터디2",description:"철수",finish:false},
    {id:3, title:"스터디3",description:"유리",finish:true},
    {id:4, title:"스터디4",description:"맹구",finish:true},
    {id:5, title:"스터디5",description:"훈이",finish:true},
]

function PresentList(props) {
    var presentList=[];
    for(var i=0; i<contents.length; i++){
        if(contents[i].finish===false) {
            presentList.push(<li><Link to={'/studymanagement/' + contents[i].id}>{contents[i].title}</Link></li>)
        }
    }
    return (
        <div>
            <ul className="presentlist" >
                <h2>진행중인 스터디 목록</h2>
                {presentList}
            </ul>
        </div>
    );
}

export default PresentList;