import React from "react";
import { Route, Switch } from "react-router";
import routes from './index';

type Props = {};

export const AppRouter: React.FC = (props: Props) => {
    return (
        <Switch>
            {
                routes.map((route, key) => (
                    <Route
                        key={key}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}/>
                ))
            }
        </Switch>
    )
}