import React from "react";

import Card from "../../shared/components/UIElements/Card";
import IdiomasItem from "./IdiomasItem";

import Button from "../../shared/components/FormElements/Button";
import "./PostList.css";

const IdiomasList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h2>No tiene ninguna publicación </h2>
          <Button to="/publicacion/idiomas/new">Crear publicación</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((post) => (
        <IdiomasItem
          key={post.id}
          id={post.id}
          imagen={post.imagen}
          titulo={post.titulo}
          resumen={post.resumen}
          informacion={post.informacion}
          onDelete={props.onDeletePost}
        />
      ))}
    </ul>
  );
};

export default IdiomasList;
