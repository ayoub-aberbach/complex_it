import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

import PasswordRange from "./components/PasswordRange";
import PasswordCont from "./components/PasswordCont";
import Btns from "./components/Btns";


function App() {

    const [result, setPassword] = useState("");
    const [pw_range, setRange] = useState(10);

    const randomString = "$abcdefghi@jklmnopqr_stuvwxyz9735%640281ABCDEFGHIJK&LMNOPQRSTUVWXYZ"

    const generate = () => {
        if (pw_range < 10) {
            toast.warning('Password Length Recommended <= 10');
            setRange(10);
            return
        }

        let res = "";

        for (let i = 0; i < pw_range; i++) {
            res += randomString[Math.floor(Math.random() * String(randomString)?.length)].toString();
        }

        setPassword(res);
    }

    return (
        <>
            <div id="app" className="bg-dark">
                <div className="app-container">
                    <header className="app-header"></header>

                    <div className="app-main">
                        <PasswordCont result={result} setPassword={setPassword} />
                        <PasswordRange pw_range={pw_range} setRange={setRange} />
                        <Btns result={result} generate={generate} />
                    </div>

                    <footer className="app-footer">
                        <p style={{ textTransform: "capitalize", color: "#000" }}>Made for security purposes!!</p>
                        <a href="https://github.com/ayoub-aberbach" target="_blank" id="my_github">My Github</a>
                    </footer>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                pauseOnHover={false}
                closeButton={false}
                autoClose={1200}
                style={{ width: "100%" }}
            />
        </>
    )
}

export default App;
