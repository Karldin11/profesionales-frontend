import React, { Component } from "react";
import PropTypes from "prop-types";
import RetrievePosts from "./RetrievePosts";
import RetrieveTramitesPosts from "./RetrieveTramitesPosts";
import RetrieveIdiomasPosts from "./RetrieveIdiomasPosts";

class ChatAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palabra: "",
      ayudas: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { palabra, ayudas } = steps;

    this.setState({ palabra, ayudas });
  }

  render() {
    const { palabra, ayudas } = this.state;
    let componenteRenderizado;

    if (ayudas.value === "titulacion") {
      componenteRenderizado = <RetrievePosts tema={palabra.value} />;
    } else if (ayudas.value === "idiomas") {
      componenteRenderizado = <RetrieveIdiomasPosts tema={palabra.value} />;
    } else if (ayudas.value === "tramites") {
      componenteRenderizado = <RetrieveTramitesPosts tema={palabra.value} />;
    } else if (ayudas.value === "otros") {
      componenteRenderizado = <RetrievePosts tema={palabra.value} />;
    } else {
      console.log("datos mandados:" + ayudas.value + " " + palabra.value);
      componenteRenderizado = (
        <React.Fragment>
          <p>"no se encontro ninguna publicación sobre el tema"</p>
        </React.Fragment>
      );
    }
    return <React.Fragment>{componenteRenderizado}</React.Fragment>;
  }
}

ChatAnswer.propTypes = {
  steps: PropTypes.object,
};

ChatAnswer.defaultProps = {
  steps: undefined,
};

export default ChatAnswer;
