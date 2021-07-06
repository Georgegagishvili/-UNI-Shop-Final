import { IsNotAuthProtected } from "../../hoc/IsNotAuthProtected";

import SignIn from "./sign-in";

function AuthPage() {
  return <SignIn></SignIn>;
}

// export default IsNotAuthProtected(AuthPage);
export default AuthPage;
