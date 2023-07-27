import React from "react";

import Card from "../../shared/components/UIElements/Card";

import Button from "../../shared/components/FormElements/Button";
import "./PostList.css";
import PostVer from "../pages/PostVer";

const PostsListTitulacion = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h2>No se encontraron publicaciones. ¿Le gustaría realizar una?</h2>
          <Button to="/publicacion/posts/new">Publicar</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((post) => (
        <PostVer Item key={post._id} postId={post._id} />
      ))}
    </ul>
  );
};

export default PostsListTitulacion;
