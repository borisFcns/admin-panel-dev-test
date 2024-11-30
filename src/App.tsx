import "./App.css";
import { Core } from "@borisFcns/panelkit-core";
import "@borisFcns/panelkit-core/dist/panelkit-styles.css";

function App() {
  return (
    <div className="App">
      <Core id="core" basename="admin-panel-dev-test" />
    </div>
  );
}

export default App;
