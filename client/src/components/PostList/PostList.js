import React from 'react';
import { List, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostList = (props) => {
    const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );
    const VoteText = ({ text }) => (
        <span style={{
            textAlign:'right',
            display:'inline-block',
            width:'70px'}}>
            <Icon type='like-o' style={{ marginRight: 8 }} />
            <Icon onClick={() => alert('text')} type='dislike-o' style={{ marginRight: 8 }} />
            {text}
        </span>
    );

    const list = <List
        size='small'
        pagination
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
            <List.Item
                actions={[<VoteText text={item.voteScore} />, <IconText type="message" text={item.commentCount} />, <a>edit</a>, <a>delete</a>]}

            >
                <List.Item.Meta
                    title={<Link to={{ pathname: '/post', hash: '#' + item.id }}>{item.title}</Link>}
                // description={`create by ${item.author} on ` + new Date(item.timestamp).toISOString().slice(0, -14)}
                // description={`create by ${item.author} on ` + new Date(Date.now()).toISOString().slice(0,-14)}
                />
                {`create by ${item.author} on ` + new Date(item.timestamp).toISOString().slice(0, -14)}
            </List.Item>
        )}
    />

    const post = <List
        size='small'
        itemLayout="vertical"
        dataSource={props.data}
        renderItem={item => (
            <List.Item
                actions={[<VoteText text={item.voteScore} />, <a>edit</a>, <a>delete</a>]}

            >
                <List.Item.Meta
                    style={{textAlign:'left'}}
                    title={item.title}
                    description={`create by ${item.author} on ` + new Date(item.timestamp).toISOString().slice(0, -14)}
                />
                {item.body}
            </List.Item>
        )}
    />

    if (props.post) {
        return post
    } else {
        return list
    }

};

PostList.propTypes = {
    data: PropTypes.array.isRequired
}


export default PostList;