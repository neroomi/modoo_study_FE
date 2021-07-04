import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, StudyList, StudyManagement, Communities, Mypage } from './pages';
import Menu from './components/Menu';

class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/community" component={Communities}/>
                <Route path="/studymanagement" component={StudyManagement}/>
                <Route path="/mypage" component={Mypage}/>
            </div>
        );
    }
}

export default App;
