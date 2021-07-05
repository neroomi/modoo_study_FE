import React from 'react';
import StudyBox from '../components/home/StudyBox';


const Home = () => {
    return (
        <div>
            <h2>스터디 목록</h2>
            <main>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
            </main>
        </div>
    );
};

export default Home;