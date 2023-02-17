import React from "react";
import logo from "./logo.svg";
import "./App.sass";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import { ErrorBoundary } from "react-error-boundary";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function ErrorHandler({ error }: any) {
  return (
    <div role="alert" className="alert">
      <h2>An error occurred: </h2>
      <h2>{error.message}</h2>
      <WarningAmberIcon sx={{ fontSize: 50 }}></WarningAmberIcon>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
          <MainPage />
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
