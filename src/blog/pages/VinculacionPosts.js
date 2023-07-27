import React, { useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VinculacionList from "../components/VinculacionList";

const VinculacionPosts = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();
  const departamento = props.departamento;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/vinculacion/${departamento}`
        );

        setLoadedPosts(responseData.posts);
        console.log(responseData);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest, departamento]);

  const postDeletedHandler = (deletedPostId) => {
    setLoadedPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== deletedPostId)
    );
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedPosts && (
        <VinculacionList
          items={loadedPosts}
          onDeletePost={postDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default VinculacionPosts;
