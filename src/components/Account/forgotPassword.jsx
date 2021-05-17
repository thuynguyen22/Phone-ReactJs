import React from 'react';
import NavBar from '../Header/NavBar';

const ForgotPassword = () => {
    return (
        <>
            <NavBar/>
            <main id="main">
                <section className="section cart__area">
                    <div className="container">
                        <div className="responsive__cart-area">
                        <div className="signin__form">
                            <div className="header">
                                <h2>Forgot Password</h2>
                                <p>Enter your email address</p>
                            </div>
                            <form className="wrapper">
                            <div className="input-data">
                                <input type="text" required />
                                <div className="underline" />
                                <label>Email address</label>
                            </div>
                            {/* <div className="error-txt">Error text</div> */}
                            <div><button className="btn-signin" type="submit">Continue</button></div>
                            <div className="link">Already a member? <a href="#">Signin here</a></div>
                            </form>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ForgotPassword;
