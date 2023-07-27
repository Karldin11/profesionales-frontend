import React, { useEffect, useState } from "react";

import IdiomasList from "../components/IdiomasList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const IdiomasPosts = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/idiomas"
        );

        setLoadedPosts(responseData.posts);
        console.log(responseData);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);

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
        <IdiomasList items={loadedPosts} onDeletePost={postDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default IdiomasPosts;
