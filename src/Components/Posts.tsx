import React from "react";
import { useState, useEffect } from "react";

import Card from "./Card";

// Post interface
import { Post } from "@/data/posts";

const Posts = (props: { posts: Post[]; type: string }) => {
  // States
  const [liked, setLiked] = useState<Post[]>([]);

  // Functions
  const toggleLike = (post: Post) => {
    // Invert the status of the post
    post.liked = !post.liked;

    // update number of likes
    if (post.liked) {
      post.numberLikes = post.numberLikes + 1;
    } else {
      post.numberLikes = post.numberLikes - 1;
    }

    if (post.liked) {
      // Add the new liked post to the "liked" state array
      setLiked([...liked, post]);

      // Update the local storage with the new liked array
      localStorage.setItem("liked", JSON.stringify([...liked, post]));
    } else {
      // Delete the  unliked post from the "liked" state array
      setLiked(...[liked.filter((like) => like.id !== post.id)]);

      // Delete the  unliked post from the "liked" local storage
      localStorage.setItem(
        "liked",
        JSON.stringify(...[liked.filter((like) => like.id !== post.id)])
      );
    }
  };

  const getLikedPosts = () => {
    const liked = localStorage.getItem("liked");
    if (liked) {
      setLiked(JSON.parse(liked));
    }
  };

  useEffect(() => {
    getLikedPosts();
  }, []);

  return (
    <>
      {props.posts.map((post: Post) => (
        <Card
          key={post.id}
          post={post}
          handleLike={toggleLike}
          type={props.type}
        />
      ))}
    </>
  );
};

export default Posts;
