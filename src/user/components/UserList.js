import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "../../blog/components/PostList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h2>No se encontraron usuarios. </h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="post-list">
      {props.items.map((user) => (
        <UserItem
          Item
          key={user._id}
          id={user._id}
          name={user.name}
          username={user.username}
          role={user.role}
          onDelete={user.onDeleteUser}
        />
      ))}
    </ul>
  );
};

export default UserList;
