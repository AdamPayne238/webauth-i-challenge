import React from "react";

//Users Display Component
const Users = props => {
    console.log("Users", props.user)

    return (
        <div>
            <h1>Users</h1>
            <h1>{props.user.username}</h1>
            <h1>{props.user.password}</h1>
        </div>
    );
};

export default Users;