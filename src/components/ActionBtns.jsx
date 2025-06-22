import { sharePw } from "../utils/helpers";


export default function ActionBtns({ password, generate }) {
    return (
        <div className="action-buttons">
            <button className="btn-primary" onClick={generate}>
                <i className="fas fa-sync-alt"></i> Generate New Password
            </button>

            <button
                onClick={() => sharePw(password)}
                className="btn-primary"
                disabled={!password}
                aria-label="share"
            ><i className="fas fa-share-alt"></i>
            </button>
        </div>
    )
}

