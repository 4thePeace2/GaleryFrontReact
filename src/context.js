import React from 'react';

const Context = React.createContext({
    isLoggedIn: false,
    picturesData: []
});

export default Context;