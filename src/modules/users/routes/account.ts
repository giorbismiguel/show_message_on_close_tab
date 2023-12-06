import {RoleDetail} from 'modules/users/pages';
import AccountGeneral from "modules/users/containers/AccountGeneral";
import AccountSecurity from "modules/users/containers/AccountSecurity";
import {RouteConfig} from "@dfl/react-security";

const accountRoutes: RouteConfig = {
    general: {
        path: '/general',
        component: AccountGeneral
    },
    security: {
        path: '/security',
        component: AccountSecurity
    },
    notification: {
        path: '/notification',
        component: RoleDetail
    },
};

export default accountRoutes;