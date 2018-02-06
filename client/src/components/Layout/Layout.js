import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


class MyLayout extends Component {
    state = {
        current: null,
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        if (e.key.includes('category')) {
            this.props.history.push('/' + e.key.slice(9));
        }
    }

    render() {
        return (
            <Layout>
                <Layout.Header style={{ position: 'fixed', width: '100%', zIndex:'2000' }}>
                    <div style={{
                        width: "120px",
                        height: "31px",
                        color: "white",
                        margin: "16px 28px 16px 0",
                        float: "left",
                        fontSize: '20px',
                        lineHeight: '1.6'
                    }}>
                        Readable

                    </div>
                    <Menu
                        theme='dark'
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.SubMenu title={<span>Categories<Icon type="caret-down" style={{ fontSize: 10 }} /></span>}>
                            <Menu.Item key="category:">Home</Menu.Item>
                            {this.props.categories.map(category => <Menu.Item key={"category:" + category.name}>{category.name}</Menu.Item>)}
                        </Menu.SubMenu>
                        <Menu.Item key="setting:1" style={{ float: 'right' }}>Option 1</Menu.Item>
                        <Menu.Item key="setting:2" style={{ float: 'right' }}>Option 2</Menu.Item>
                    </Menu>
                </Layout.Header>
                <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <main style={{ background: '#fff', padding: 24, minHeight: '180vh' }}>{this.props.children}</main>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>
                    Readable ©2018 Created by Yuhan Lin
                </Layout.Footer>
            </Layout>

        );

    }
}

export default withRouter(MyLayout);