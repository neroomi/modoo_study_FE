import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, StudyList, StudyManagement,Communities } from './pages';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                {/*<Route path="/studylist" component={StudyList}/>*/}
                <Route path="/community" component={Communities}/>
                <Route path="/studymanagement" component={StudyManagement}/>
            </div>
        );
    }
}

export default App;
