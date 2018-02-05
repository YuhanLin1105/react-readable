import React, { Component } from 'react';

import {DatePicker} from 'antd';
import 'antd/dist/antd.css';

class Layout extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
               <DatePicker/>
            </React.Fragment>

        );

    }
}

export default Layout;