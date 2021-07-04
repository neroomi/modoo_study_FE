import React from 'react';
import "../assets/css/modal.css"

function SigninModal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        <div className="loginForm">
                            <div className="nicknameForm">
                                <input
                                    name="nickname"
                                    className="loginId"
                                    type="nickname"
                                    placeholder="닉네임"
                                    // onChange={this.loginHandler}
                                />
                                <button>중복확인</button>
                            </div>

                            <input
                                name="location"
                                className="location"
                                type="location"
                                placeholder="선호지역"
                                // onChange={this.loginHandler}
                            />
                            <div className="signupSession">
                                <input type="checkbox" id="category1"></input>
                                <label htmlFor="signupSession">NCS/인적성</label>
                                <input type="checkbox" id="category2"></input>
                                <label htmlFor="signupSession">면접</label>
                            </div>
                            {/*{props.children} app값 불러오기*/ }
                        </div>

                    </main>
                    <footer>
                        <div className="googleLogin">
                            <button>구글 인증하기</button>
                        </div>
                        <div className="join">
                            <button>회원가입</button>
                        </div>

                        {/* <div className="closeSection">
                            <button className="close" onClick={close}> close </button>
                        </div> */}
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default SigninModal;