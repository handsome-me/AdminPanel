
import React, { memo } from 'react';
import { Provider } from 'react-redux'
import store from './store'
 

const ReduxWrapper :React.FC= memo((props) => {

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
});

export default ReduxWrapper;