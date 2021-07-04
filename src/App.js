import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";
import NavBar from "./components/navbar";
import MainPage from "./pages/main-page";

import "./App.css";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <MainPage></MainPage>
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
