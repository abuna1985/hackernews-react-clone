import React from 'react';
import List from './components/List';
import Search from './components/Search';
import Header from './components/Header';

const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
];

const App = () => {
    return (
      <div>               
        <Header/>
        <main>
          <Search />
          <hr />
          <List list={list} />
        </main>
      </div>
    );
}

export default App;