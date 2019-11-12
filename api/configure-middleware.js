const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
//Part 2 (sessions and cookies)
const session = require('express-session'); // 1: npm i express-session
const KnexSessionStorage = require('connect-session-knex')(session); // for storing sessions in database
const knexConnection = require('../database/db-config');


// 2: Configure Sessions and Cookies
const sessionConfiguration = {
    name: 'bugger', //default is sid
    secret: process.env.COOKIE_SECRET || 'is it a secret??',
    cookie: {
        maxAge: 1000 * 60 * 60, // valid for 1 hour(milliseconds)
        secure: process.env.NODE_ENV === 'development' ? false : false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10, // delete expired sessions every 10 minutes
        tablename: 'user_sessions',
        sidfieldname: 'id',
        createtable: true
    })
}

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfiguration)); // 3: use the session middleware globally
};