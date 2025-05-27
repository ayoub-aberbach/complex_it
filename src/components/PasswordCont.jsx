import { LuClipboardCopy } from 'react-icons/lu'
import { writeClipboardText } from '../utils/copy_clip'

function PasswordCont({ result, setPassword }) {
    return (
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
    )
}

export default PasswordCont
