import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";
import NavBar from "./components/navbar";

import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth-page/";
import CartPage from "./pages/cart-page/";
import SingleProductPage from "./pages/single-product-page/SingleProductPage";

import Footer from "./components/footer/Footer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <MainPage></MainPage>
            <Footer></Footer>
          </Route>
          <Route path="/auth">
            <AuthPage></AuthPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path={`/product/id`}>
            <SingleProductPage></SingleProductPage>
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
