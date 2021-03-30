import { IconButton, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

export const Menu: React.FC = () => {
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const handleClick = (event: any) => setAnchor(event.currentTarget);
    const handleClose = () => setAnchor(null);
    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <MuiMenu
                id="menu-appbar" 
                open={open}
                onClose={handleClose}
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                transformOrigin={{vertical: "top", horizontal: "left"}}
                getContentAnchorEl={null}
            >
                <MenuItem
                    onClick={handleClose}
                >
                    Categorias
                </MenuItem>
            </MuiMenu>
        </React.Fragment>
    );
}

export default Menu;