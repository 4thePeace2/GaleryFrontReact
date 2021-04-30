import React from 'react';

const Context = React.createContext({
    isLoggedIn: false,
    token: "",
    picturesData: [],
    user: "",
});

export default Context;