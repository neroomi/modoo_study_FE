import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, StudyList, StudyManagement, Communities, Mypage } from './pages';
import { SigninModal } from './components';
import Menu from './components/Menu';
// import SigninModal from './components/SigninModal';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/community" component={Communities}/>
                <Route path="/studymanagement" component={StudyManagement}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/signinmodal" component={SigninModal}/>
            </div>
        );
    }
}

export default App;
