import { Redirect } from "react-router";

export const IsNotAuthProtected = (Component) => {
  const IsNotAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) return <Redirect to="/"></Redirect>;

    return <Component {...props}></Component>;
  };

  return IsNotAuthProtected;
};
