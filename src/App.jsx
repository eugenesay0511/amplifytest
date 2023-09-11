import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { Amplify } from "aws-amplify";
import "./App.css";
// import "@aws-amplify/ui-react/styles.css";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);
// import { useAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [count, setCount] = useState(0);
  // const { user, signOut } = useAuthenticator((context) => [
  //   context.user,
  //   context.signOut,
  // ]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <button onClick={signOut}>Sign Out</button> */}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">Hello World from Amplify HEHEHEHEHE</p>
    </>
  );
}

export default App;
