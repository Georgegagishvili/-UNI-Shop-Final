import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../../services/auth";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (formData) => {
    const loggedIn = await login(formData);
    localStorage.setItem("auth.token", JSON.stringify(loggedIn.token));
    history.replace("/");
  };
  return (
    <div>
      {/* <!-- Login Left Side Form Start --> */}
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {/* <!-- Inputs Wrapper Start--> */}
        <div className="login-left__inputs">
          {/* <!-- Single input start --> */}
          <div className="input-wrapper">
            <input
              type="email"
              name="E-Mail"
              id="email"
              value="eve.holt@reqres.in"
              {...register("email", { required: true })}
            />
            <div className="input-image-wrapper">
              <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Message-Email-Mail-ICon-PNG.png" />
            </div>
          </div>
          {/* <!-- Single input end --> */}

          {/* <!-- Single input start --> */}
          <div className="input-wrapper">
            <input
              type="password"
              name="E-Mail"
              id="password"
              value="cityslicka"
              {...register("password", { required: true })}
            />
            <div className="input-image-wrapper">
              <img src="https://i.dlpng.com/static/png/6534587_preview.png" />
            </div>
          </div>
          {/* <!-- Single input end --> */}
        </div>
        {/* <!-- Inputs Wrapper end--> */}
        <div className="form-button">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
