import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

import Users from "./Users";

const UserData = props => {
    useEffect(() => {
        props.fetchUsers();
    }, []);

    // if (props.isFetching){
    //     return <h2>Loading users.....</h2>
    // }

    return (
        <div>
            {/* {props.error && <p>{props.error}</p>} */}
            {props.userData.map(user => (
                <Users 
                key={user.id}
                user={user}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userData: state.userData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchUsers}
)(UserData);