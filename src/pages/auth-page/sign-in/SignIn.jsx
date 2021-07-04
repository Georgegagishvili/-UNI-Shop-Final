import SignInForm from "../../../components/forms/sign-in-form/SignInForm";

import styles from "./signin_style.module.css";
import "./signin_style.css";

export default function SignIn() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.form_wrapper}>
        {/* <!-- LOGIN FORM   --> */}
        <div className="login-wrapper" id="loginform">
          <div className="login-left">
            {/* <!-- Login header start --> */}
            <div className="login-left-header">
              <span>Sign in using:</span>
            </div>
            <div className="left-panel-img-wrapper">
              <div className="left-panel-logo">
                <span>f</span>
              </div>
              <div className="left-panel-logo">
                <span>G</span>
              </div>
              <div className="left-panel-logo">
                <span>ln</span>
              </div>
            </div>
            {/* <!-- Login header end --> */}
            <SignInForm></SignInForm>
            {/* <!-- Login Left Side Form End --> */}
          </div>

          <div className="login-right">
            {/* <!-- Right Panel Header --> */}
            <div className="login-right-header">
              <span>Welcome Back!</span>
              <p>
                To keep connected with us please login with your personal info.
              </p>
              <button id="sign-up-button">Sign Up</button>
            </div>
            {/* <!-- Right Panel Header --> */}

            {/* <!-- RIGHT Panel Animation --> */}
            <div className="login-right-images" id="right-images"></div>
            {/* <!-- RIGHT Panel Animation --> */}
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- LOGIN FORM   --> */}
  );
}
