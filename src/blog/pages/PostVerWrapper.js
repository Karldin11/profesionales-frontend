import React from "react";
import { useParams } from "react-router-dom";
import PostVer from "./PostVer";

const PostVerWrapper = () => {
  const { postId } = useParams();

  return <PostVer postId={postId} />;
};

export default PostVerWrapper;
