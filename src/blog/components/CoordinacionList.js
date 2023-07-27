import React from "react";

import Card from "../../shared/components/UIElements/Card";
import CoordinacionItem from "./CoordinacionItem";

import Button from "../../shared/components/FormElements/Button";
import "./PostList.css";

const CoordinacionList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h2>No se encontraron publicaciones. ¿Le gustaría realizar una?</h2>
          <Button to="/publicacion/coordinacion/new">Publicar</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((post) => (
        <CoordinacionItem
          Item
          key={post._id}
          id={post._id}
          imagen={post.imagen}
          carrera={post.carrera}
          departamento={post.departamento}
          datosContacto={post.datosContacto}
          onDelete={props.onDeletePost}
        />
      ))}
    </ul>
  );
};

export default CoordinacionList;
