import React from 'react'

function PasswordRange({ pw_range, setRange }) {
    return (
        <div className="pwLnCn">
            <label htmlFor="pw_length">Password Length:</label>
            <div className="pwLnBox">
                <input
                    id="pw_length"
                    type="range"
                    max={50}
                    value={pw_range}
                    onChange={e => setRange(e.target.value)}
                />
                <span>{pw_range}</span>
            </div>
        </div>

    )
}

export default PasswordRange
