import { AppBar, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React from 'react';
import Menu from '../Menu';

const style = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: "blue",
    },
    menu: {
        textAlign: 'right',
    }
}));

export const Navbar: React.FC = () => {
    const classes = style();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;