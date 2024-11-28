import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { LuClipboardCopy } from "react-icons/lu";
import { sharePw, writeClipboardText } from "./utils/funcs";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


function App() {

    const [result, setPassword] = useState("");

    const buffer = new ArrayBuffer(64);
    const rand_numbers = new BigUint64Array(buffer, 8, 4);

    self.crypto.getRandomValues(rand_numbers);

    const symbs = "#@%&$";
    const numbers = "9735640281";
    const alpha_lower = "abcdefghijklmnopqrstuvwxyz";
    const alpha_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let combineRand = "";

    const generate = () => {
        const rand_final = rand_numbers[Math.floor(Math.random() * 4)].toString(36);
        let mix_all =
            alpha_lower.slice(Math.floor(Math.random() * 26)).toString()
            + symbs.slice(Math.floor(Math.random() * 5)).toString()
            + numbers.slice(Math.floor(Math.random() * 10)).toString()
            + alpha_upper.slice(Math.floor(Math.random() * 26)).toString();

        for (let index = 0; index < 21; index++) {
            combineRand += mix_all[parseInt(rand_final[index % rand_final.length], 36) % mix_all.length]
        }

        setPassword(combineRand);
    }

    return (
        <>
            <h1 className="title">Complex it</h1>
            <div id="app">
                <div className="app-container">
                    <header className="app-header">
                        <h1>Password Generator</h1>
                    </header>
                    <main className="app-main">
                        <div className="result-container">
                            <input
                                readOnly
                                type="text"
                                id="result"
                                placeholder="Your Password"
                                value={result}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button
                                className="copy-btn"
                                title="Copy to clipboard"
                                onClick={() => writeClipboardText(result)}
                            >
                                <LuClipboardCopy size={20} />
                            </button>
                        </div>
                        <div className="action-buttons">
                            <button
                                className="btn-primary share-btn"
                                onClick={() => sharePw(result)}
                                disabled={!result}
                            >
                                Share Password
                            </button>
                            <button
                                className="btn-primary generate-btn"
                                onClick={generate}
                            >
                                Generate Password
                            </button>
                        </div>
                    </main>
                    <footer className="app-footer">
                        <p style={{textTransform: "capitalize"}}>Made for security purposes!!</p>
                    </footer>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                pauseOnHover={false}
                closeButton={false}
            />
        </>
    )
}

export default App
