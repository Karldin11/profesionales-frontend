import React, { useEffect, useState } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import UserList from "../components/UserList";

const ShowUsers = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/users`
        );

        setLoadedUsers(responseData.users);
        console.log(responseData);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);

  const postDeletedHandler = (deletedUserId) => {
    setLoadedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
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

      {!isLoading && loadedUsers && (
        <UserList items={loadedUsers} onDeletePost={postDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default ShowUsers;
