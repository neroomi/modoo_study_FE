import React from 'react';
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





function Home() {
    return (
        <div>
            <h2>스터디 목록</h2>
            <main>
                <StudyList/>
            </main>
        </div>
    );
};

export default Home;