import React, { useEffect } from "react";

const ELEMENT_ID = "comments-micro-frontend";
const SCRIPT_ID = "comments-micro-frontend-script";

const renderCommentsMicroFrontEnd = () => {
  if (!window.renderComments) {
    return;
  }
  window.renderComments(ELEMENT_ID);
};

const unmountCommentsMicroFrontEnd = () => {
  if (!window.unmountComments) {
    return;
  }
  window.unmountComments(ELEMENT_ID);
};

const appendScript = () => {
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = "http://localhost:5001/bundle.js";
  script.onload = renderCommentsMicroFrontEnd;
  document.head.appendChild(script);
};

const CommentsMicroFrontend = () => {
  if (document.getElementById(SCRIPT_ID)) {
    renderCommentsMicroFrontEnd();
  } else {
    appendScript();
  }
  

  useEffect(() => unmountCommentsMicroFrontEnd(), []);

  return <section id={ELEMENT_ID}></section>;
};

export default CommentsMicroFrontend;
