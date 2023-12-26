const MainSes = () => {
    /*
    const signUpbutton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
        
    signUpbutton.addEventListener('click',() => {
        container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click',() => {
        container.classList.remove('right-panel-active');
    });
    */
  return (
    <>
        <main id="mainSesion">
            <section>
                <div className="container" id="container">
                    <div className="form-container sign-up-container p-5">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    {/*<div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign In</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                                <a href="#" className="social">
                                    <i></i>
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign In</button>
                        </form>
                    </div>*/}
                </div>
            </section>
        </main>
    </>
  )
}

export default MainSes