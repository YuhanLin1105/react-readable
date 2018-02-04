import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import MyNavBar from '../NavBar/NavBar';

class Layout extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <MyNavBar />
                <Grid>
                    sdf
                </Grid>
            </React.Fragment>

        );

    }
}

export default Layout;