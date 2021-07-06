import React from 'react';
import { Component } from 'react';
import StudyList from '../components/home/StudyList';


// const Home = () => {
//     return (
//         <div>
//             <h2>스터디 목록</h2>
//             <main>
//                 <StudyBox/>
//                 <StudyBox/>
//                 <StudyBox/>
//             </main>
//         </div>
//     );
// };

// export default Home;


// const studies = [
//     {
//         title: "면접스터디",
//         tags: ["NCS", "IT", "영어"],
//         person: "10",
//         period: ["2021-08-01", "2021-08-30"]
//     },
//     {
//         title: "코딩스터디",
//         tags: ["컴퓨터", "IT", "개발",],
//         person: "10",
//         period: ["2021-07-01", "2021-07-30"],
//     },
//     {
//         title: "영어스터디",
//         tags: ["회화", "언어", "토익"],
//         person: "5",
//         period: ["2021-06-01", "2021-06-30"]
//     },
//     {
//         title: "자격증스터디",
//         tags: ["IT", "기사", "자격증"],
//         person: "8",
//         period: ["2021-05-01", "2021-05-30"]
//     },
// ]


function Home() {
    return (
        <div>
            <h2>스터디 목록</h2>
            <main>
                <StudyList/>
            </main>
        </div>
    );
}
export default Home;