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
                            <input
                                name="email"
                                className="loginId"
                                type="email"
                                placeholder="아이디"
                                // onChange={this.loginHandler}
                            />
                            <input
                                name="password"
                                className="loginPw"
                                type="password"
                                placeholder="비밀번호"
                                // onChange={this.loginHandler}
                            />
                            {/*{props.children} app값 불러오기*/ }
                            <div className="loginOptions">
                                <div className="loginSession">
                                    <input type="checkbox" id="loginSession"></input>
                                    <label for="loginSession">로그인 유지</label>
                                </div>
                                <div className="findMyAccount">
                                    <a href="/"><span>아이디/비밀번호 찾기</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="loginSubmit">
                            <input class="loginSubmitBtn" type="submit" value="로그인하기"/>
                        </div>

                    </main>
                    <footer>
                        <div className="googleLogin">
                            <button>구글로 로그인하기</button>
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