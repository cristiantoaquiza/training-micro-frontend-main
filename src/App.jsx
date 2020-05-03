import React from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import CommentsMicroFrontend from "./components/CommentsMicroFrontend";

const App = () => (
  <main>
    <h1>App</h1>
    <Users />
    <Posts />
    <CommentsMicroFrontend />
  </main>
);

export default App;
