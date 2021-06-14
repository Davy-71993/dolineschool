import { Route, Switch } from 'react-router-dom';
import Signup from '../pages/Signup';
import Home from '../pages/Home';

const Router = () =>(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/accounts" component={Signup}/>
    </Switch>  
);

export default Router;