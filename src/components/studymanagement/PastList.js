import React from 'react';
import {Link, Route} from "react-router-dom";
import Category from "../../pages/Category";

var contents=[
    {id:1, title:"스터디1",description:"짱구",finish:false},
    {id:2, title:"스터디2",description:"철수",finish:false},
    {id:3, title:"스터디3",description:"유리",finish:true},
    {id:4, title:"스터디4",description:"맹구",finish:true},
    {id:5, title:"스터디5",description:"훈이",finish:true},
]

function PastList(props) {
    var pastList=[];
    for(var i=0; i<contents.length; i++){
        if(contents[i].finish===true) {
            pastList.push(<li><Link to={'/studymanagement/' + contents[i].id}>{contents[i].title}</Link></li>)
        }
    }
    return (
        <div>
            <ul className="presentlist" >
                <h2>과거 스터디 이력</h2>
                {pastList}
            </ul>
            {/*<Route exact path={props.url} render={()=>(<h3>Please select any study</h3>)}/>*/}
            {/*<Route path={`${props.url}/:id`} component={Category}/>*/}

        </div>
    );
}

export default PastList;