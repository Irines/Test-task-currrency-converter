import React, { createContext, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.sass";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import { ErrorBoundary } from "react-error-boundary";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { CurrencyContextType, CurrencyObj } from "./interfaces/currency-data";
import { CurrencyContext } from "./data-context";

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
  const [currencyData, setCurrencyData] = useState<CurrencyObj[]>([]);
  const value: { 
    currencyData: CurrencyObj[]; 
    setCurrencyData: React.Dispatch<React.SetStateAction<CurrencyObj[]>>;
  } = useMemo(
    () => ({ currencyData, setCurrencyData }), 
    [currencyData]
  );
  return (
    <div className="App">
      <CurrencyContext.Provider value={value}>
      {useMemo(() => (
        <Layout>
          <ErrorBoundary FallbackComponent={ErrorHandler}>
            <MainPage />
          </ErrorBoundary>
        </Layout>
      ), [])}
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
