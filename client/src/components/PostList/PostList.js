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
        <span>
            <Icon type='like-o' style={{ marginRight: 8 }} />
            <Icon onClick={() => alert('text')} type='dislike-o' style={{ marginRight: 8 }} />
            {text}
        </span>
    );

    return (
        <List
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
                        description={item.body}
                    />
                </List.Item>
            )}
        />
    );
};

PostList.propTypes = {
    data: PropTypes.array.isRequired
}


export default PostList;