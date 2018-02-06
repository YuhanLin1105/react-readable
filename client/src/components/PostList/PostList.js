import React from 'react';
import { List,Icon } from 'antd';

const PostList = (props) => {
    const IconText = ({ type, text }) => (
        <span>
          <Icon type={type} style={{ marginRight: 8 }} />
          {text}
        </span>
      );
    const VoteText = ({text})=>(
        <span>
            <Icon type='like-o' style={{ marginRight: 8 }} />
            <Icon onClick={()=>alert('text')} type='dislike-o' style={{ marginRight: 8 }} />
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
                    actions={[ <VoteText text={item.voteScore} />, <IconText type="message" text={item.commentCount} />,<a>edit</a>, <a>delete</a>]}
                    
                    >
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.body}
                    />
                </List.Item>
            )}
        />
    );
};

export default PostList;