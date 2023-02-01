import reactLogo from "@assets/react.svg";
import Layout from "@components/Layout";
import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";

import { Button } from "@chakra-ui/react";
import { routePath } from "@routes/path";
import { WebviewWindow } from '@tauri-apps/api/window';


function HomePage() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Layout>
      <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>
      <p>{greetMsg}</p>
      <Button onClick={() => {
        const webview = new WebviewWindow(routePath.Login, {
          url: routePath.Login,
          x: 100,
          y: 100
        })
        // since the webview window is created asynchronously,
        // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
        webview.once('tauri://created', function () {
          // webview window successfully created
        })
        webview.once('tauri://error', function (e) {
          // an error occurred during webview window creation
        });
      }}>Open login in new window</Button>
    </div>
    </Layout>
  );
}

export default HomePage;
