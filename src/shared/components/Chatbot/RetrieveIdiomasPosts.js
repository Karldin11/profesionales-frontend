import React, { useEffect, useState } from "react";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hook";
import OptionsListIdiomas from "./OptionsListIdiomas.js";

const RetrieveIdiomasPosts = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();
  const tema = props.tema;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/idiomas/search/${tema}`
        );

        setLoadedPosts(responseData.posts);
        console.log(responseData);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest, tema]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedPosts && <OptionsListIdiomas items={loadedPosts} />}
    </React.Fragment>
  );
};

export default RetrieveIdiomasPosts;
