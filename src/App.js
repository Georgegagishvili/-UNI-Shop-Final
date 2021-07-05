import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";
import NavBar from "./components/navbar";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth-page/";
import CartPage from "./pages/cart-page/";

import "./index.css";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <MainPage></MainPage>
          </Route>
          <Route path="/auth">
            <AuthPage></AuthPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </ErrorBoundary>
    </div>
  );
}

export default App;
