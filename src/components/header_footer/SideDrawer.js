import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClick={()=> props.onClose(false)}
        >
          <List component="nav">
                <ListItem button onClick={()=> console.log('Features')}>
                    Event start In
                </ListItem>
                <ListItem button onClick={()=> console.log('Features')}>
                    Venue Info
                </ListItem>
                <ListItem button onClick={()=> console.log('Features')}>
                   Highlights
                </ListItem>
                <ListItem button onClick={()=> console.log('Features')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=> console.log('Features')}>
                    Location
                </ListItem>
          </List >
        </Drawer>
    );
};

export default SideDrawer;