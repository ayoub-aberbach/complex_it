import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

import PasswordRange from "./components/PasswordRange";
import PasswordCont from "./components/PasswordCont";
import Btns from "./components/Btns";


function App() {

    const [result, setPassword] = useState("");
    const [pw_range, setRange] = useState(10);

    const randomString = "$abc0defghi@jklmno$6pqr_stuvwxyz&9735%640281ABCDE_FGHIJK&LMNOPQRST4@UVWXYZ"

    const generate = () => {
        if (pw_range < 10) {
            toast.warning('More than 10 is Recommended');
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
