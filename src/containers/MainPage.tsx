import CurrencyTable from "../components/CurrencyTable";
import "../styles/main-page.sass"

function MainPage() {
    return (
        <div className="main-container">
            <CurrencyTable/>
            <div>Here will be converter</div>
        </div>
    );
}

export default MainPage;