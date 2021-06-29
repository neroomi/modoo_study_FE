import React from 'react';
import { Link, Route } from 'react-router-dom';
import Community from './Community';

const Communities = ({match}) => {
    return (
        <div>
            <h2>커뮤니티 카테고리</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>카테고리 #1</Link></li>
                <li><Link to={`${match.url}/2`}>카테고리 #2</Link></li>
                <li><Link to={`${match.url}/3`}>카테고리 #3</Link></li>
                <li><Link to={`${match.url}/4`}>카테고리 #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any community</h3>)}/>
            <Route path={`${match.url}/:id`} component={Community}/>
        </div>
    );
};

export default Communities;