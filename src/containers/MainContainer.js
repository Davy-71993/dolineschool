import BaseRouter from './BaseRouter';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Main = () => {

    return (
        <div>
            <Nav/>
            <BaseRouter/>
            <Footer/>
        </div>
    ) 
}

export default Main