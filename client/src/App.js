import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import PostList from './components/PostList/PostList';
import HomePage from './pages/HomePage';

class App extends Component {



  render() {
    const defaultCategories = {
      categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
      ]
    }

    const defaultPosts = {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
    }

    const defaultComments = {
      "894tuq4ut84ut8v4t8wun89g": {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      "8tu4bsun805n8un48ve89": {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
    }

    const {categories} = defaultCategories;
    const posts = Object.keys(defaultPosts).map(key=>{
      return defaultPosts[key];
    })
    
    console.log(posts);

    return (
      <Layout categories={categories}>
        <Switch>
          {/* {categories.map(category => <Route path={'/' + category.path} render={()=><PostList data={posts}/>} />)} */}
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
