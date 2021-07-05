import React from 'react';
import {useParams} from "react-router-dom";

var contents=[
    {id:1, title:"스터디1",description:"짱구"},
    {id:2, title:"스터디2",description:"철수"}
]


function PresentStudy(props) {
    var params=useParams();
    var study_id = params.study_id;
    var selected_study = {
        title:'Sorry',
        description:'Not Found'
    }
    for(var i=0; i<contents.length; i++){
        if(contents[i].id === Number(study_id)){
            selected_study = contents[i];
            break;
        }
    }


    return (
        <div>
            <h3>{selected_study.title}</h3>
            {selected_study.description}
        </div>
    );
}

export default PresentStudy;