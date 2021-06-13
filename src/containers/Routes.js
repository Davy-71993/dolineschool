import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';;

const Router = () =>(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/login" component={Login}/>
    </Switch>  
);

export default Router;