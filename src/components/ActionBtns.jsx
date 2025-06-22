import { sharePw } from "../utils/helpers";


export default function ActionBtns({ password, generate }) {
    return (
        <div className="action-buttons">
            <button
                className="btn-primary share-btn"
                onClick={() => sharePw(password)}
                disabled={!password}
            >
                <i className="fas fa-share-alt"></i>
                Share Password
            </button>
            <button className="btn-primary" onClick={generate}>
                <i className="fas fa-sync-alt"></i> Generate New Password
            </button>
        </div>
    )
}

