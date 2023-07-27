import React from "react";

import Card from "../../shared/components/UIElements/Card";

import Button from "../../shared/components/FormElements/Button";
import "./PostList.css";
import HeroSection from "../../home/components/HeroSection";

const PostsListInicio = (props) => {
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
        <HeroSection
          Item
          key={post._id}
          id={post._id}
          imagen={post.imagen}
          titulo={post.titulo}
          seccion={post.seccion}
          resumen={post.resumen}
          informacion={post.informacion}
        />
      ))}
    </ul>
  );
};

export default PostsListInicio;
