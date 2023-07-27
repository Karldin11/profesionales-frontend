import React from "react";

const AdaptarTexto = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default AdaptarTexto;
