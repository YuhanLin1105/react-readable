import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'antd/lib/divider';

class PostPage extends Component {

    componentDidMount(){
        console.log(this.props.history.location.hash.slice(1));
    }

    render() {
        return (
            <div>
                post
            </div>
        );
    };
}



export default PostPage;