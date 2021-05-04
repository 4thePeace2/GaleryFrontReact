import React from 'react';

const Context = React.createContext({
    isLoggedIn: false,
    token: "",
    picturesData: [],
    user: "",
    // validation: true,
});

export default Context;