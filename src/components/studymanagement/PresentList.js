import React from 'react';
import {Link, Route,useParams} from "react-router-dom";
import Category from "../../pages/Category";

var contents=[
    {id:1, title:"스터디1",description:"짱구"},
    {id:2, title:"스터디2",description:"철수"}
]

function PresentList(props) {

    var list=[];
    for(var i=0;i<contents.length;i++){
        list.push(<li><Link to={'/studymanagements/'+contents[i].id}>{contents[i].title}</Link></li>)
    }

    return (
        <div>
            <ul className="presentlist" >
                <h2>진행중인 스터디 목록</h2>
                {/*{list}*/}
            </ul>
            <Route exact path={props.url} render={()=>(<h3>Please select any study</h3>)}/>
            <Route path={`${props.url}/:id`} component={Category}/>

        </div>
    );
}

export default PresentList;