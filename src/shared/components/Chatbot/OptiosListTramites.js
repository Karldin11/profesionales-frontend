import React from "react";

import PreviewItemTramite from "./PreviewItemTramite";

const OptionsListTramites = (props) => {
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
        <PreviewItemTramite postId={post._id} />
      ))}
    </ul>
  );
};

export default OptionsListTramites;
