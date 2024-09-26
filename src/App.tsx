import "./App.css";
import { ConfigProvider, theme } from "antd";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
    return (
        <div className="App">
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm,
                }}
            >
                <FilterableProductTable />
            </ConfigProvider>
        </div>
    );
}

export default App;
