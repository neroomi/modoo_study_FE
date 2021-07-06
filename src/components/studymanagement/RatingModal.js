import React from 'react';
import {useParams} from "react-router-dom";
// import "../assets/css/modal.css"

var contents=[
    {id:1, title:"스터디1",description:"짱구",finish:false},
    {id:2, title:"스터디2",description:"철수",finish:false},
    {id:3, title:"스터디3",description:"유리",finish:true},
    {id:4, title:"스터디4",description:"맹구",finish:true},
    {id:5, title:"스터디5",description:"훈이",finish:true},
]

function SigninModal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close} = props;

    //PresentStudy 컴포넌트에서 해당 스터디 파라메타 불러오는 코드
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
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <section>
                    <header>
                        {selected_study.title}그룹 팀원 평가하기
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        <div className="loginForm">
                            {/*{props.children} app값 불러오기*/ }
                            <div className="loginOptions">
                                유저1
                                <div className="loginSession">
                                    <input type="checkbox" id="loginSession"></input>
                                    <label for="loginSession">상</label>
                                    <input type="checkbox" id="loginSession"></input>
                                    <label htmlFor="loginSession">중</label>
                                    <input type="checkbox" id="loginSession"></input>
                                    <label htmlFor="loginSession">하</label>
                                </div>
                                <input
                                    name="email"
                                    className="loginId"
                                    type="email"
                                    placeholder="코멘트"
                                    // onChange={this.loginHandler}
                                />
                            </div>

                        </div>

                    </main>
                    <footer>
                        <div className="ratingBtn">
                            <button>평가완료</button>
                        </div>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default SigninModal;