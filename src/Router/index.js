import React from 'react';
import todo from '../Components/Todos/index';
import { Switch, Route } from 'react-router';

export default props => (
    <Switch>
        <Route exact path='/todo' component={todo} />
        <Route path='/**' render={ () => { return (<div>Error 404</div>)}} />
    </Switch>
)