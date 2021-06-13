import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function BaseRouter() {
    return (
        <div>
          <Router>
            <Routes/>
          </Router>
        </div>
    );
}

export default BaseRouter;