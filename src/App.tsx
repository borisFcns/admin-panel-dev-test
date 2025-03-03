import "./App.css";
import { CoreWrapper } from "@borisfcns/panelkit-core";
import "@borisfcns/panelkit-core/dist/panelkit-styles.css";

function App() {
  return (
    <div className="App">
        {/*@ts-ignore*/}
      <CoreWrapper id="core"
            basename="admin-panel-dev-test"
            urls={{
                apiUrl: "https://manager-api.felicons.com:2096",
                authUrl:  "https://manager-auth-api.felicons.com:2096",
            }} />
    </div>
  );
}

export default App;
