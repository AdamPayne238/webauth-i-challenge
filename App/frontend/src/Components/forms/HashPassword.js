import React, { useState } from "react";
import { connect } from "react-redux";

import { hashPassword } from "../actions";

function HashPassword({ hashPassword }){
    const [ password, setPassword ] = useState("");

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            password: password
        }
        hashPassword(user)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                password="password"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
                />
                <button>Hash</button>
            </form>
        </div>
    );
};

export default connect(
    null,
    {hashPassword}
)(HashPassword);