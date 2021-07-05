import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import { Home, StudyList, StudyManagement, Community, Mypage } from './pages';
import Menu from './components/Menu';

class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/studymanagement" component={StudyManagement}/>
                    <Route path="/mypage" component={Mypage}/>
                    <Route path="/">Not found</Route>
                </Switch>

            </div>
        );
    }
}

export default App;
