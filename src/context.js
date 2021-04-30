import React from 'react';

const Context = React.createContext({
    isLoggedIn: false,
    token: "",
    picturesData: [],
    delStatus: false
});

export default Context;