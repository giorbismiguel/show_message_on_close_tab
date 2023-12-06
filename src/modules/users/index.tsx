import routes from 'modules/users/routes';
import {RouteLoader} from '@dfl/react-security';


const Module = () => {
    return (<RouteLoader routes={routes} notfoundRedirect={'/users'} memory/>);
};

export default Module;
