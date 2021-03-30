import { AppBar, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React from 'react';
import Menu from '../Menu';

const style = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: "blue",
    },
}));

export const Navbar: React.FC = () => {
    const classes = style();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu></Menu>            
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;