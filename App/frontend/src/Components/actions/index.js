import axios from 'axios';

export const START_AXIOS = 'START_AXIOS';
export const AXIOS_SUCCESS = 'AXIOS_SUCCESS';
export const AXIOS_FAILURE = 'AXIOS_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const HASH_PASSWORD = 'HASH_PASSWORD';

//Fetch Users
export const fetchUsers = () => dispatch => {
    //START_AXIOS
    dispatch({ type: START_AXIOS });
    axios
        //retrieve user data
        .get("http://localhost:7777/api/users")
    //AXIOS_SUCCESS
    .then(response => dispatch({ type: AXIOS_SUCCESS, payload: response.data }))
    //AXIOS_FAILURE
    .catch(err => dispatch({ type: AXIOS_FAILURE, payload: err.response}))
};

//Login User
export const loginUser = (user) => dispatch => {
    dispatch({ type: LOGIN_USER });
    axios
        .post("http://localhost:7777/api/auth/login", user)
    //REGISTER_USER
    .then(response => dispatch(console.log("Post Res Login", response),{ type: LOGIN_USER, payload: response.data}))
    .catch(error => console.log(error));
};

//Register User
export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_USER });
    axios
        .post(
            "http://localhost:7777/api/auth/register", user
        )
    //REGISTER_USER
    .then(response => dispatch(console.log("Post Res Register", response),{ type: REGISTER_USER, payload: response.data}))
    .catch(error => console.log(error));
};

//Hash Password
export const hashPassword = (user) => dispatch => {
    dispatch({ type: HASH_PASSWORD });
    axios
    .post("http://localhost:7777/api/hash", user)
    //HASH_PASSWORD
    .then(response => dispatch(console.log("Hash Res", response), { type: HASH_PASSWORD, payload: response.data}))
    .catch(error => console.log((error)))
}