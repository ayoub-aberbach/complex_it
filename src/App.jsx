import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { LuClipboardCopy } from "react-icons/lu";
import { sharePw, writeClipboardText } from "./utils/funcs";


const symbs = "#@%&$";
const numbers = "9735640281";
const alpha_lower = "abcdefghijklmnopqrstuvwxyz";
const alpha_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function App() {

    const [result, setPassword] = useState("");

    let mix_all = symbs + alpha_lower + numbers + alpha_upper;
    let res = "";

    const generate = () => {
        for (let i = 0; i < 21; i++) { res += mix_all[Math.floor(Math.random() * mix_all.length)].toString(); }
        setPassword(res);
    }

    return (
        <>
            <h1 className="title">Complex it</h1>
            <div id="app">
                <div className="app-container">
                    <header className="app-header">
                        <h1>Password Generator</h1>
                    </header>
                    <div className="app-main">
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
                    </div>
                    <footer className="app-footer">
                        <p style={{ textTransform: "capitalize" }}>Made for security purposes!!</p>
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

export default App;
