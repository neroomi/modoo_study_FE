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
                        <input
                            name="email"
                            className="loginId"
                            type="text"
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
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default SigninModal;