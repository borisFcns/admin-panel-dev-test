import "./App.css";
import { CoreWrapper } from "@borisfcns/panelkit-core";
import "@borisfcns/panelkit-core/dist/panelkit-styles.css";

const apiUrl = process.env.REACT_APP_API_URL;
const authUrl = process.env.REACT_APP_AUTH_URL;

function App() {
    if (!apiUrl || !authUrl) {
        throw new Error("API URL or AUTH URL not set");
    }

  return (
    <div className="App">
        {/*@ts-ignore*/}
      <CoreWrapper id="core"
            basename="admin-panel-dev-test" urls={{apiUrl, authUrl}}
      />
    </div>
  );
}

export default App;
