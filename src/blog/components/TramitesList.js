import React from "react";

import Card from "../../shared/components/UIElements/Card";
import TramiteItem from "./TramiteItem";

import Button from "../../shared/components/FormElements/Button";
import "./PostList.css";

const TramitesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h2>No se encontraron publicaciones. ¿Le gustaría realizar una?</h2>
          <Button to="/publicacion/tramite/new">Publicar</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((post) => (
        <TramiteItem
          Item
          key={post._id}
          id={post._id}
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

export default TramitesList;
