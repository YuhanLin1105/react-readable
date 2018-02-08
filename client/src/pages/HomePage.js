import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreater from '../store/actions/index';


class HomePage extends Component {
    state = {}


    componentDidMount(){
        this.props.fetchPostsAll();

    }

    render() {
        return (
            <div>
                HomePage
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPostsAll:()=>dispatch(actionCreater.fetchPostsAll())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);