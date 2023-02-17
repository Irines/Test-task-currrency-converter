import CurrencyTable from "../containers/CurrencyTable";
import "../styles/main-page.sass";
import Converter from "./Converter";

function MainPage() {
  return (
    <div className="main-container">
      <CurrencyTable />
      <Converter/>
    </div>
  );
}

export default MainPage;
