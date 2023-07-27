import React from "react";

import PreviewItemPost from "./PreviewItemPost";

const OptionsListPosts = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <h2>No se encontraron publicaciones. </h2>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((post) => (
        <PreviewItemPost postId={post._id} />
      ))}
    </ul>
  );
};

export default OptionsListPosts;
