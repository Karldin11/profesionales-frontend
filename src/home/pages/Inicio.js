import ITTCarousel from "../components/ITTCarousel";
import React from "react";

import ShowPosts from "../../blog/pages/ShowPosts";
import ShowPostsInicio from "../../blog/pages/ShowPostsInicio";
const Inicio = (props) => {
  return (
    <>
      <div>
        <ITTCarousel />
      </div>
      <div className=" ">
        <ShowPostsInicio seccion={"inicio"} />
      </div>
      <div className=" ">
        <ShowPosts seccion={"destacada"} />
      </div>
    </>
  );
};

export default Inicio;
