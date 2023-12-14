import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; 

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import style from '../styles/MenuBar';

const MenuBar = () => {
    const { user } = useContext(AuthContext);
    const [openDrawLeft, setDrawLeft] = useState(false);
    
    const openDraw = () => {
        setDrawLeft(!openDrawLeft);
    }

    if(!user) return null;

    return ( 
 
        <Drawer
            onClick={openDraw}
            open={openDraw}
            onClose={openDraw}
            variant="permanent"
            anchor="left"
        >
            <div className={style.list}>
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    {user.typeUser === 1 && (
                        <ListItem button component={Link} to="/admin">
                            <ListItemText primary="Panel de Administrador" />
                        </ListItem>
                    )}
                    {user.typeUser === 2 && (
                        <ListItem button component={Link} to="/user">
                            <ListItemText primary="Dashboard de Usuario" />
                        </ListItem>
                    )}
                    <ListItem button component={Link} to="/logout">
                        <ListItemText primary="Cerrar Sesión" />
                    </ListItem>
                </List>
            </div>
       
        </Drawer>
    )
}

export default MenuBar;