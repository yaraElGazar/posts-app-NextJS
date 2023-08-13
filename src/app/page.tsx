"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Posts from '@/Components/Posts';
import { posts } from '@/data/posts';


// Post interface
import { Post } from '@/data/posts';

const Home = () => {

  // States
  const[currentPosts, setCurrentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const liked = localStorage.getItem("liked");

    // Check if there are liked posts stored in the local storage
    if (liked) {
      const likedIDs = JSON.parse(liked).map((likedPost:Post) => likedPost.id);
      // update the curent posts to reflect the liked posts
      const updatedPosts = posts.map((post)=>{
        if(likedIDs.includes(post.id)) {
          post.liked = true;
          return post;
        } else {
          return post;
        }
      });
      // update the posts with the liked posts
      setCurrentPosts(updatedPosts);
    }

    // set the current posts to the posts from data if there are no liked posts in the local storage
    setCurrentPosts(posts);
  }, []);

  return (
    <div className="container">
      <Posts posts={currentPosts} type="all"/>
    </div>
  );
};

export default Home;