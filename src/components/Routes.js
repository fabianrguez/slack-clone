import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import Chat from './Chat/Chat';

function Routes() {
    return(
        <Switch>
            <Route path="/room/:roomId">
                <Chat/>
            </Route>
            <Route path="/">
                <h1>Hey! Welcome!</h1>
            </Route>
        </Switch>
    );
}

export default Routes;