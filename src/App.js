import React, { Suspense, Component } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Loading from "./loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong</h1>
    ) : (
      <Suspense fallback={<Loading />}>
        <Pokemon />
      </Suspense>
    );
  }
}

export default App;
