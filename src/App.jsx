import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import CommentsMicroFrontend from './components/CommentsMicroFrontend';

const App = () => (
  <main>
    <h1>App</h1>
    <Users />
    <div style={{ display: 'flex' }}>
      <Posts />
      <CommentsMicroFrontend />
    </div>
  </main>
);

export default App;
