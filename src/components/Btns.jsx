import { sharePw } from '../utils/share_pw'


function Btns({ result, generate }) {
    return (
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
    )
}

export default Btns
